import React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '../../../components/atoms/box';
import Container from '../../../components/atoms/container';
import Paper from '../../../components/atoms/paper';
import { CProductContext } from '../context/CProductDetail';
import Buttons from '../../../components/atoms/button';
import FormatMoney from '../../../hooks/FormatMoney';
import { useTheme } from '@mui/material';
import '@fontsource/open-sans/600.css';
import '../ProductDetail.css';

const BookingSummary = () => {
  const cProductContext = React.useContext(CProductContext);
  const muiTheme = useTheme();

  let containerClassName = 'desktop__booking-summary';
  if (cProductContext.showBook) {
    containerClassName += ' active';
  }

  const BookDetail = () => {
    if (cProductContext.isValidBook) {
      return (
        <>
          <Typography variant="h6" color={muiTheme.palette.text.disabled}>
            subtotal
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {FormatMoney(cProductContext.bookingFee)}
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <br />
          <Typography variant="body1" color="error">
            {cProductContext.invalidBookMsg}
          </Typography>
        </>
      );
    }
  };

  return (
    <>
      <Paper className={containerClassName} sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Box>
          <Container>
            <Grid container>
              <Grid item lg={6}>
                <BookDetail />
              </Grid>
              <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box>
                  <br />
                  <Buttons
                    to={cProductContext.bookUrl}
                    variant="contained"
                    color="warning"
                    disabled={!cProductContext.isValidBook}
                  >
                    bayar sekarang
                  </Buttons>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
    </>
  );
};

export default BookingSummary;
