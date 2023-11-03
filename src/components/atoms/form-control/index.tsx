import MuiFormControl from '@mui/material/FormControl';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  classes?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  component?: any;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  size?: 'medium' | 'small';
  sx?: any;
  variant?: 'filled' | 'outlined' | 'standard';
}

const FormControl = (props: Props) => {
  const { children, color, component, disabled, error, fullWidth, required, size, sx, variant } = props;
  return (
    <MuiFormControl
      component={component}
      sx={sx}
      color={color}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      required={required}
      size={size}
      variant={variant}
    >
      {children}
    </MuiFormControl>
  );
};

export default FormControl;
