import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type TDatePicker = {
  defaultValue?: any;
  onChange: (...event: any[]) => void;
  onBlur: any;
  disabled?: boolean | undefined;
  name: any;
  // ref?: any;
};

type TTextFieldDatePicker = {
  error?: boolean | false | true;
  helperText?: '' | string;
  size?: 'small' | 'medium';
  fullWidth?: false | true;
};

const DatePicker = (props: TDatePicker & TTextFieldDatePicker) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          disabled={props.disabled}
          // ref={props.ref}
          slotProps={{
            textField: {
              error: props.error || false,
              helperText: props.helperText || '',
              size: props.size || 'small',
              fullWidth: props.fullWidth || false,
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
