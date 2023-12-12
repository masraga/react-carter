import MuiContainer from '@mui/material/Container';

interface Props {
  children?: React.ReactNode;
  classes?: React.ReactNode;
  disableGutters?: boolean;
  fixed?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Container = (props: Props) => {
  let { children, disableGutters, fixed, maxWidth, className } = props;
  return (
    <MuiContainer
      className={className}
      disableGutters={disableGutters}
      fixed={fixed}
      maxWidth={maxWidth ? maxWidth : 'xl'}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
