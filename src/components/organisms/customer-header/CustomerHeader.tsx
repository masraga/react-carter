import Container from '../../atoms/container';
import Paper from '../../atoms/paper';
import Button from '../../atoms/button';
import Box from '../../atoms/box';
import IconButton from '../../molecules/icon-button';
import SearchComponent from '../../molecules/search-component';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import RequestQuote from '@mui/icons-material/RequestQuote';
import '@fontsource/rubik/800.css';
import './CustomerHeader.css';
import React from 'react';

const CustomerHeader = () => {
  const [searchIsShow, setSearchIsShow] = React.useState<boolean>(false);
  const [searchItem, setSearchItem] = React.useState<Array<{ url: string; name: React.ReactNode }>>([]);

  const searchOnChange = (e: any) => {
    setSearchItem([...searchItem, { url: '/product', name: <>{e.target.value}</> }]);
    setSearchIsShow(true);
    if (e.target.value == '') {
      setSearchIsShow(false);
      setSearchItem([]);
    }
  };

  return (
    <>
      <Paper square={true}>
        <Container>
          <Box className="header-item">
            <div className="app-title">
              <Button variant="text" to="/" color="warning" className="btn-app-title">
                K.
              </Button>
            </div>
            <SearchComponent searchItem={searchItem} searchIsShow={searchIsShow} searchOnChange={searchOnChange} />
            <div className="header-button" style={{ paddingTop: 13 }}>
              <Box className="icon-button-container">
                <IconButton title="riwayat transaksi" href="/product">
                  <RequestQuote fontSize="medium" />
                </IconButton>
                <IconButton title="keranjang" href="/product">
                  <ShoppingCart fontSize="medium" />
                </IconButton>
                <IconButton title="akun" href="/product">
                  <PersonIcon fontSize="medium" />
                </IconButton>
              </Box>
            </div>
          </Box>
        </Container>
      </Paper>
      <br />
    </>
  );
};

export default CustomerHeader;
