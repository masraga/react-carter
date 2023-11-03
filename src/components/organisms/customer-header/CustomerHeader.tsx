import Container from '../../atoms/container';
import Paper from '../../atoms/paper';
import Button from '../../atoms/button';
import Box from '../../atoms/box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import RequestQuote from '@mui/icons-material/RequestQuote';
import Search from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import '@fontsource/rubik/800.css';
import './CustomerHeader.css';

const CustomerHeader = () => {
  const muiTheme = useTheme();
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
                <Tooltip title="riwayat transaksi">
                  <IconButton href="/product" style={{ color: muiTheme.palette.text.primary }}>
                    <RequestQuote fontSize="medium" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="keranjang belanja">
                  <IconButton href="/product" style={{ color: muiTheme.palette.text.primary }}>
                    <ShoppingCart fontSize="medium" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="akun">
                  <IconButton href="/product" style={{ color: muiTheme.palette.text.primary }}>
                    <PersonIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default CustomerHeader;
