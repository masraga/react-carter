import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  href: string;
  color?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const IconButton = (props: Props) => {
  const { children, title, href, color, className, size } = props;
  const muiTheme = useTheme();
  return (
    <MuiTooltip title={title}>
      <MuiIconButton
        size={size}
        className={className}
        href={href}
        style={{ color: color ? color : muiTheme.palette.text.primary }}
      >
        {children}
      </MuiIconButton>
    </MuiTooltip>
  );
};

export default IconButton;
