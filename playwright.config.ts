import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const PORT = process.env.PORT || 3004;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: path.join(__dirname, 'src/tests'),
  use: {
    baseURL,
    browserName: 'chromium',
    screenshot: 'only-on-failure',
  },
  projects: [
    // { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  webServer: {
    command: `PORT=3004 PLAYWRIGHT=true npm run dev`,
    reuseExistingServer: !process.env.CI,
    url: baseURL,
  },
  reporter: 'html',
});
