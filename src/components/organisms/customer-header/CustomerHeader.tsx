import Container from '../../atoms/container';
import Paper from '../../atoms/paper';
import Button from '../../atoms/button';
import Box from '../../atoms/box';
import IconButton from '../../molecules/icon-button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import RequestQuote from '@mui/icons-material/RequestQuote';
import Search from '@mui/icons-material/Search';
import '@fontsource/rubik/800.css';
import './CustomerHeader.css';

const CustomerHeader = () => {
  return (
    <>
      <Paper square={true}>
        <Container>
          <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div className="app-title">
              <Button variant="text" color="warning" className="btn-app-title">
                K.
              </Button>
            </div>
            <div className="search-bar" style={{ width: '50%', paddingTop: 13 }}>
              <TextField
                id="outlined-start-adornment"
                sx={{ fontSize: 10 }}
                fullWidth={true}
                size="small"
                placeholder="Cari seluruh sepeda disini..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="header-button" style={{ paddingTop: 13 }}>
              <Box>
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
    </>
  );
};

export default CustomerHeader;
