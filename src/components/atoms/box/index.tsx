import MuiBox from '@mui/material/Box';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  component?: any;
  sx?: any;
}

const Box = (props: Props) => {
  const { children, component, sx } = props;
  return (
    <MuiBox component={component} sx={sx}>
      {children}
    </MuiBox>
  );
};

export default Box;
