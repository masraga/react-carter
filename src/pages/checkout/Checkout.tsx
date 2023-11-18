import React from 'react';
import { Typography, Divider, Badge } from '@mui/material';
import Box from '../../components/atoms/box';
import Paper from '../../components/atoms/paper';
import Container from '../../components/atoms/container';
import { useTheme } from '@mui/material';
import FormatMoney from '../../hooks/FormatMoney';
import Buttons from '../../components/atoms/button';
import Countdown from 'react-countdown';
import './Checkout.css';
import '@fontsource/open-sans/600.css';
import CustomerHeader from '../../components/organisms/customer-header/CustomerHeader';

type THistoryData = {
  code: string;
  items: Array<{ name: string; qty: number; totalFee: number }>;
  expiredAt: Date;
  status: string;
  totalFee: number;
};

const DBTx: Array<THistoryData> = [
  {
    code: '000001',
    items: [
      { name: 'mtb 27.5 inch pacific vigilon 1.0 alloy size l', qty: 20, totalFee: 50000 },
      { name: 'mtb 27.5 inch pacific vigilon 1.0 alloy size m', qty: 20, totalFee: 50000 },
      { name: 'mtb 27.5 inch pacific vigilon 1.0 alloy size xl', qty: 20, totalFee: 50000 },
    ],
    expiredAt: new Date(),
    status: 'menunggu',
    totalFee: 150000,
  },
];

const Checkout = () => {
  const muiTheme = useTheme();
  const [txData, setTxData] = React.useState<THistoryData>(DBTx[0]);

  const PurchaseItemComp = () => {
    let itemComp: Array<React.ReactNode> = [];
    txData.items.forEach((v, i) => {
      itemComp.push(
        <Box className="checkout-item" key={Math.random()}>
          <Box className="description">
            <Typography variant="subtitle1" sx={{ textTransform: 'lowercase' }}>
              {v.name}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Jumlah: <span>{v.qty}</span>
            </Typography>
          </Box>
          <Box className="price">
            <Typography variant="h6">{FormatMoney(v.totalFee)}</Typography>
          </Box>
        </Box>,
      );
    });

    return itemComp;
  };

  const FooterPaidComp = (props: { status: string }) => {
    const { status } = props;
    if (status == 'menunggu') {
      return (
        <>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            kadaluarsa dalam{' '}
          </Typography>
          <Countdown
            intervalDelay={0}
            date={Date.now() + 1000 * 2000}
            renderer={(expired: any) => {
              return (
                <Typography variant="body1">
                  {expired.hours}:{expired.minutes}:{expired.seconds}
                </Typography>
              );
            }}
          />
        </>
      );
    } else if (status == 'selesai') {
      return <Badge sx={{ marginTop: 1.6, marginLeft: 2.5 }} badgeContent="selesai" color="success" />;
    } else if (status == 'batal') {
      return <Badge sx={{ marginTop: 1.6, marginLeft: 2.5 }} badgeContent="batal" color="error" />;
    } else if (status == 'expired') {
      return <Badge sx={{ marginTop: 1.6, marginLeft: 2.5 }} badgeContent="expired" color="secondary" />;
    }
  };

  return (
    <>
      <CustomerHeader />
      <Paper className="checkout-container" sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Container>
          <Box className="checkout-title">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Ringkasan pesanan
            </Typography>
            <Typography sx={{ marginTop: 1.2, marginLeft: 0.5, color: muiTheme.palette.text.disabled }} variant="body2">
              #{txData.code}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: muiTheme.palette.text.disabled }}>
            Berikut adalah ringkasan pesanan kamu, pastikan pesanan kamu sesuai, jika pesanan sudah dibayar, maka
            pesanan tidak bisa dibatalkan (refund)
          </Typography>
          <br />
          <Divider />
          <PurchaseItemComp />
          <Divider />
          <Box className="checkout-total">
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              TOTAL
            </Typography>
            <Typography variant="h6" color={muiTheme.palette.success.light}>
              {FormatMoney(txData.totalFee)}
            </Typography>
          </Box>
          <Buttons variant="contained" color="warning" fullWidth={true} sx={{ marginBottom: 1.5 }}>
            Lanjutkan pembayaran
          </Buttons>
          <Buttons variant="text" color="error" fullWidth={true}>
            Batalkan pembayaran
          </Buttons>
          <Divider sx={{ marginTop: 10 }} />
          <Box sx={{ display: 'flex', marginTop: 1 }}>
            <FooterPaidComp status={txData.status} />
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Checkout;
