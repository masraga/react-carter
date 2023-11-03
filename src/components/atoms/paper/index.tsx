import MuiPaper from '@mui/material/Paper';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
}

const Paper = (props: Props) => {
  const { children, elevation, square, variant } = props;
  return (
    <MuiPaper elevation={elevation} square={square} variant={variant}>
      {children}
    </MuiPaper>
  );
};

export default Paper;
