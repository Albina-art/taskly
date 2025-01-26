import React from 'react';

import { Paper, styled } from '@mui/material';

import { getTestId, renderTestId } from '@/utils/testId';

interface CardProps {
  children: React.ReactNode;
}

const Root = styled('div')({
  position: 'relative',
  width: '100%',
  maxWidth: '40rem',
  margin: '0 auto',
});

const StyledPaper = styled(Paper)({
  position: 'relative',
  zIndex: 20,
  boxShadow: '0px 2px 12px 0px rgba(156,156,156,0.4)',
});

const BackgroundPaper = styled(StyledPaper)({
  zIndex: 10,
  transform: 'translateY(-0.35rem) translateX(0.25rem)',
  width: 'calc(100% - 8px)',
  height: '0.75rem',
});

const FurtherBackgroundPaper = styled(StyledPaper)({
  zIndex: 0,
  transform: 'translateY(-0.7rem) translateX(0.5rem)',
  width: 'calc(100% - 16px)',
  height: '0.75rem',
});

const CARD_TEST_IDS = {
  CONTAINER: getTestId('CARD'),
};

const Card = ({ children }: CardProps) => {
  return (
    <Root {...renderTestId(CARD_TEST_IDS.CONTAINER)}>
      <StyledPaper>{children}</StyledPaper>
      <BackgroundPaper />
      <FurtherBackgroundPaper />
    </Root>
  );
};

export default Card;
