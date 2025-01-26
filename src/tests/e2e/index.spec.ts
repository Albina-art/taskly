import { expect, test } from '@playwright/test';

import { TASK_FOOTER_TEST_IDS } from '@/components/TaskFooter';
import { TASK_HEADER_TEST_IDS } from '@/components/TaskHeader';
import { TASK_ITEM_TEST_IDS } from '@/components/TaskItem';
import { HOME_TEST_IDS, Task } from '@/pages';
import { TASKS_STORAGE_KEY } from '@/utils/constants';

test('should match snapshot of the DOM', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId(HOME_TEST_IDS.CONTAINER)).toMatchAriaSnapshot(`
    - heading "todos" [level=1]
    - textbox "What needs to be done?"
    - button "Add"
    - paragraph: 0 items left
    - button "All"
    - button "Active"
    - button "Completed"
    - button "Clear completed"
    `);
});

test('should load tasks from localStorage', async ({ page }) => {
  page.on('console', (msg) => console.log(msg.text()));

  const tasks: Task[] = [
    {
      id: '1',
      text: 'Test Task',
      completed: false,
    },
  ];

  await page.goto('/');

  await page.evaluate(
    ({ key, value }) => {
      window.localStorage.setItem(key, value);
    },
    { key: TASKS_STORAGE_KEY, value: JSON.stringify(tasks) },
  );

  await page.reload();

  const taskItem = await page.getByTestId(TASK_ITEM_TEST_IDS.CONTAINER);

  await expect(taskItem).toHaveCount(1);

  const taskText = await taskItem.nth(0).getByTestId(TASK_ITEM_TEST_IDS.TEXT); // Поменяйте на правильный селектор для текста задачи
  await expect(taskText).toHaveText(tasks[0].text); // Проверяем, что текст задачи совпадает с ожидаемым
});

test('should clear completed task', async ({ page }) => {
  await page.goto('/');
  const input = page.locator('input');
  await input.fill('Active Task');

  await page.getByTestId(TASK_HEADER_TEST_IDS.INPUT).locator('input').fill('Active Task');
  await page.keyboard.press('Enter');
  await page.getByTestId(TASK_HEADER_TEST_IDS.INPUT).locator('input').fill('Completed Task');
  await page.getByTestId(TASK_HEADER_TEST_IDS.ADD_BUTTON).click();

  // Завершаем одну задачу
  const taskCompleted = await page.getByTestId(TASK_ITEM_TEST_IDS.CONTAINER).nth(1);

  await taskCompleted.getByRole('checkbox').check();

  // Проверяем, что задача завершена
  await expect(taskCompleted.getByTestId(TASK_ITEM_TEST_IDS.TEXT)).toHaveCSS(
    'text-decoration-line',
    'line-through',
  );
  const tasks = await page.getByTestId(TASK_ITEM_TEST_IDS.CONTAINER);
  await expect(tasks).toHaveCount(2); // Ожидаем, что осталась только одна активная задача

  // Нажимаем на кнопку "Clear completed"
  await page.getByTestId(TASK_FOOTER_TEST_IDS.CLEAR_BUTTON).click();

  await expect(tasks).toHaveCount(1); // Ожидаем, что осталась только одна активная задача
});
