import React from 'react';

import { Paper } from '@mui/material';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Paper className="relative z-20 shadow-[0px_2px_12px_0px_rgb(156,156,156,0.4)]">
        {children}
      </Paper>
      <Paper className="relative z-10 p-1 shadow-md translate-y-[-0.35rem] w-[calc(100%-8px)] translate-x-1 h-3" />
      <Paper className="relative z-0 p-1 shadow-md translate-y-[-0.7rem] w-[calc(100%-16px)] translate-x-2  h-3" />
    </div>
  );
};

export default Card;
