import MuiContainer from '@mui/material/Container';

interface Props {
  children?: React.ReactNode;
  classes?: React.ReactNode;
  disableGutters?: boolean;
  fixed?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Container = (props: Props) => {
  let { children, disableGutters, fixed, maxWidth } = props;
  return (
    <MuiContainer disableGutters={disableGutters} fixed={fixed} maxWidth={maxWidth ? maxWidth : 'xl'}>
      {children}
    </MuiContainer>
  );
};

export default Container;
