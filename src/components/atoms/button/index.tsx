import MuiButton from '@mui/material/Button';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  classes?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant: 'contained' | 'outlined' | 'text';
}

const Buttons = (props: Props) => {
  return (
    <MuiButton
      startIcon={props.startIcon}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      size={props.size}
      color={props.color}
      variant={props.variant}
      className={props.className}
    >
      {props.children}
    </MuiButton>
  );
};

export default Buttons;