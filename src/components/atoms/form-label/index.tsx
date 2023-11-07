import Typography from '@mui/material/Typography';
import '@fontsource/open-sans/600.css';

type TFormLabel = {
  label: string;
};

const FormLabel = (props: TFormLabel) => {
  return (
    <>
      <Typography component="div" variant="body1" sx={{ fontWeight: 600 }} gutterBottom={true}>
        {props.label}
      </Typography>
    </>
  );
};

export default FormLabel;
