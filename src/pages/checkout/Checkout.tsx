import { Typography, Divider } from '@mui/material';
import Box from '../../components/atoms/box';
import Paper from '../../components/atoms/paper';
import Container from '../../components/atoms/container';
import { useTheme } from '@mui/material';
import FormatMoney from '../../hooks/FormatMoney';
import Buttons from '../../components/atoms/button';
import Countdown from "react-countdown";
import './Checkout.css';
import '@fontsource/open-sans/600.css';

const Checkout = () => {
  const muiTheme = useTheme();

  const ExpiredComp = (expired: any) => {
    return <Typography variant='body1'>{expired.hours}:{expired.minutes}:{expired.seconds}</Typography>;
  }

  return (
    <>
      <Paper className="checkout-container" sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Container>
          <Box className="checkout-title">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Ringkasan pesanan
            </Typography>
            <Typography sx={{ marginTop: 1.2, marginLeft: 0.5, color: muiTheme.palette.text.disabled }} variant="body2">
              #0893001
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: muiTheme.palette.text.disabled }}>
            Berikut adalah ringkasan pesanan kamu, pastikan pesanan kamu sesuai, jika pesanan sudah dibayar, maka
            pesanan tidak bisa dibatalkan (refund)
          </Typography>
          <br />
          <Divider />
          <Box className="checkout-item">
            <Box className="description">
              <Typography variant="subtitle1" sx={{ textTransform: 'lowercase' }}>
                MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE L
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Jumlah: <span>20</span>
              </Typography>
            </Box>
            <Box className="price">
              <Typography variant="h6">{FormatMoney(50000)}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="checkout-total">
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              TOTAL
            </Typography>
            <Typography variant="h6" color={muiTheme.palette.success.light}>
              {FormatMoney(50000)}
            </Typography>
          </Box>
          <Buttons variant="contained" color="warning" fullWidth={true} sx={{ marginBottom: 1.5 }}>
            Lanjutkan pembayaran
          </Buttons>
          <Buttons variant="text" color="error" fullWidth={true}>
            Batalkan pembayaran
          </Buttons>
          <Divider sx={{marginTop: 10}} />
          <Box sx={{display: "flex", marginTop:1}}>
            <Typography variant='body1' sx={{marginRight:1}}>kadaluarsa dalam </Typography>
            <Countdown intervalDelay={0} date={Date.now() + 1000 * 2000} renderer={ExpiredComp}/>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Checkout;
