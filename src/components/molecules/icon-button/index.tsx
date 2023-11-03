import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  href: string;
}

const IconButton = (props: Props) => {
  const { children, title, href } = props;
  const muiTheme = useTheme();
  return (
    <MuiTooltip title={title}>
      <MuiIconButton href={href} style={{ color: muiTheme.palette.text.primary }}>
        {children}
      </MuiIconButton>
    </MuiTooltip>
  );
};

export default IconButton;
