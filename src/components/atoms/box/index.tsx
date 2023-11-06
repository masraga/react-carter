import MuiBox from '@mui/material/Box';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  component?: any;
  sx?: any;
  className?: string;
}

const Box = (props: Props) => {
  const { children, component, sx, className } = props;
  return (
    <MuiBox component={component} sx={sx} className={className}>
      {children}
    </MuiBox>
  );
};

export default Box;
