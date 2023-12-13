import { Divider, Grid, Link, Typography } from '@mui/material';
import Box from '../../components/atoms/box';
import Buttons from '../../components/atoms/button';
import Container from '../../components/atoms/container';
import GetScreenSize from '../../hooks/GetScreenSize';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import './Dashboard.css';
import '@fontsource/rubik/600.css';

const DefaultLayout = () => {
  const muiTheme = useTheme();
  return (
    <>
      <Container className="home-container">
        <Box sx={{ marginBottom: 6 }}>
          <Buttons variant="text" to="/" color="warning" sx={{ fontSize: '3rem', fontFamily: 'rubik' }}>
            K.
          </Buttons>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Typography variant="h2" sx={{ fontWeight: 600, fontFamily: 'rubik', marginBottom: 4 }}>
                TEMUKAN SEPEDA TERBAIK KAMU DISINI
              </Typography>
              <Typography sx={{ fontSize: '2rem' }}>
                aplikasi penyewaan sepeda terbaik yang pernah ada, hemat uang, bebas polusi.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ marginTop: 3.7 }}>
                <Box>
                  <Buttons variant="outlined" color="warning" size="medium">
                    TENTANG KAMI
                  </Buttons>
                </Box>
                <Box>
                  <Buttons variant="contained" to="/product" color="warning" size="medium">
                    AYO MULAI
                  </Buttons>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={7} sx={{ paddingLeft: 4 }}>
              <Box className="bg-bycicle"></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Box>
        <Container>
          <Typography align="right">
            design by{' '}
            <Link sx={{ textDecoration: 'none', fontWeight: 600, color: muiTheme.palette.warning.main }}>
              koderpedia
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

const Dashboard = () => {
  const screenSize = GetScreenSize();

  return screenSize.width >= 840 ? <DefaultLayout /> : <DefaultLayout />;
};

export default Dashboard;
