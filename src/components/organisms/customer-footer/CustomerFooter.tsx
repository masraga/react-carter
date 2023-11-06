import * as React from 'react';
import Paper from '../../atoms/paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';

type TCustomerFooter = { menu: string };

export default function CustomerFooter(props: TCustomerFooter) {
  const muiTheme = useTheme();
  const [value, setValue] = React.useState(props.menu);

  return (
    <>
      <br />
      <br />
      <br />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);

            return event;
          }}
          sx={{
            '& .Mui-selected, .Mui-selected > svg': {
              color: muiTheme.palette.warning.main,
            },
          }}
        >
          <BottomNavigationAction href="/product" value="dashboard" label="Dashboard" icon={<HomeIcon />} />
          <BottomNavigationAction href="/transaction" value="transaksi" label="Transaksi" icon={<RequestQuoteIcon />} />
          <BottomNavigationAction href="/cart" value="keranjang" label="Keranjang" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction href="/account" value="akun" label="Akun" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
