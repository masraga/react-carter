import React from 'react';
import Container from '../../components/atoms/container';
import Paper from '../../components/atoms/paper';
import CustomerHeader from '../../components/organisms/customer-header/CustomerHeader';
import { Badge, CardActionArea, Divider, Typography, useTheme } from '@mui/material';
import Box from '../../components/atoms/box';
import FormatMoney from '../../hooks/FormatMoney';
import './TransactionHistory.css';
import '@fontsource/open-sans/600.css';
import GetScreenSize from '../../hooks/GetScreenSize';
import CustomerFooter from '../../components/organisms/customer-footer/CustomerFooter';

type THistoryData = {
  code: string;
  items: Array<{ name: string; qty: number; totalFee: number }>;
  expiredAt: Date;
  status: string;
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
  },
  {
    code: '000002',
    items: [
      { name: 'Polygon vigilon 1.0 alloy size l', qty: 20, totalFee: 50000 },
      { name: 'Polygon vigilon 1.0 alloy size m', qty: 20, totalFee: 50000 },
      { name: 'Polygon vigilon 1.0 alloy size xl', qty: 20, totalFee: 50000 },
    ],
    expiredAt: new Date(),
    status: 'selesai',
  },
  {
    code: '000003',
    items: [
      { name: 'WinCycle vigilon 1.0 alloy size l', qty: 20, totalFee: 50000 },
      { name: 'WinCycle vigilon 1.0 alloy size m', qty: 20, totalFee: 50000 },
      { name: 'WinCycle vigilon 1.0 alloy size xl', qty: 20, totalFee: 50000 },
    ],
    expiredAt: new Date(),
    status: 'expired',
  },
];

const TransactionHistory = () => {
  const screenSize = GetScreenSize();
  const muiTheme = useTheme();
  const cardWidth: string = screenSize.width < 900 ? '100%' : '70%';
  const HistoryCardComponent = (props: { historyList: Array<THistoryData> }) => {
    let HistoryCard: Array<React.ReactNode> = [];
    let index = 0;
    for (let history of props.historyList) {
      let subTotalFee: number = 0;
      index++;

      //START: show detail purchase item
      const ItemCard: Array<React.ReactNode> = [];
      for (let item of history.items) {
        subTotalFee += item.totalFee;
        ItemCard.push(
          <React.Fragment key={Math.random()}>
            <Box key={Math.random()} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  jumlah: <span>20</span>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">{FormatMoney(item.totalFee)}</Typography>
              </Box>
            </Box>
            <Box sx={{ marginBottom: 2 }}></Box>
          </React.Fragment>,
        );
      }
      //END: show detail purchase item

      // START: show tx status
      const TxStatusComp = () => {
        if (history.status == 'menunggu') {
          return <Badge sx={{ marginTop: 1.6, marginLeft: 5 }} badgeContent="menuggu" color="warning" />;
        } else if (history.status == 'selesai') {
          return <Badge sx={{ marginTop: 1.6, marginLeft: 5 }} badgeContent="selesai" color="success" />;
        } else if (history.status == 'batal') {
          return <Badge sx={{ marginTop: 1.6, marginLeft: 5 }} badgeContent="batal" color="error" />;
        } else if (history.status == 'expired') {
          return <Badge sx={{ marginTop: 1.6, marginLeft: 5 }} badgeContent="expired" color="secondary" />;
        }
      };
      // END: show tx status
      HistoryCard.push(
        <CardActionArea href={`/booking/summary/${history.code}`} key={Math.random()}>
          <Paper sx={{ padding: 2, width: cardWidth, margin: '0 auto', marginBottom: 3 }} key={Math.random()}>
            <Typography gutterBottom variant="h6">
              Pesanan: {history.code}
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {ItemCard}
            <Divider sx={{ marginBottom: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 600 }}>status: </Typography>
                <TxStatusComp />
              </Box>
              <Box>
                <Typography variant="h6" color={muiTheme.palette.success.light}>
                  {FormatMoney(subTotalFee)}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </CardActionArea>,
      );
    }
    return HistoryCard;
  };

  return (
    <>
      <CustomerHeader />
      <Container>
        <HistoryCardComponent key="history-card" historyList={DBTx} />
      </Container>
      {screenSize.width < 840 ? <CustomerFooter menu='transaksi' /> : <></> }
    </>
  );
};

export default TransactionHistory;
