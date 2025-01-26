type TestIdProps = {
  'data-testid'?: string;
};

const renderTestId = (id: string): TestIdProps => {
  if (process.env.PLAYWRIGHT !== 'true') {
    return {};
  }

  return {
    'data-testid': id,
  };
};

// const getTestId = (id: string) => `${uniqueId()}_${id}`;
const getTestId = (id: string) => `_${id}`;

export { getTestId, renderTestId };
