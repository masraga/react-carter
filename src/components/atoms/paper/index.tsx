import MuiPaper from '@mui/material/Paper';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
  className?: string;
  sx?: any;
  style?: any;
}

const Paper = (props: Props) => {
  const { children, elevation, square, variant, className, sx, style } = props;
  return (
    <MuiPaper elevation={elevation} square={square} variant={variant} className={className} sx={sx} style={style}>
      {children}
    </MuiPaper>
  );
};

export default Paper;
