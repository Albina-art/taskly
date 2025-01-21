import { Paper } from '@mui/material';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <Paper className="relative z-10 shadow-lg translate-y-0 mix-blend-mode bg-white">
        {children}
      </Paper>
      <Paper className="relative z-0 p-1 shadow-lg translate-y-[-0.2rem] w-[calc(100%-8px)] translate-x-1 bg-white h-3" />
      <Paper className="relative z-0 p-1 shadow-lg translate-y-[-0.4rem] w-[calc(100%-16px)] translate-x-2 bg-white h-3" />
    </div>
  );
};

export default Card;
