import React from 'react';
import Container from '../../components/atoms/container';
import Paper from '../../components/atoms/paper';
import CustomerFooter from '../../components/organisms/customer-footer/CustomerFooter';
import CustomerHeader from '../../components/organisms/customer-header/CustomerHeader';
import GetScreenSize from '../../hooks/GetScreenSize';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LoginIcon from '@mui/icons-material/Login';

const Account = () => {
  const screenSize = GetScreenSize();
  const [isLogin] = React.useState(false);
  return (
    <>
      <CustomerHeader />
      <Paper sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Container>
          <List>
            {!isLogin ? (
              <ListItem disablePadding>
                <ListItemButton href="/login">
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login / Register akun" />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton href="/product">
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Detail akun" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="/product">
                    <ListItemIcon>
                      <PowerSettingsNewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Keluar" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Container>
      </Paper>
      {screenSize.width < 840 ? <CustomerFooter menu="akun" /> : <></>}
    </>
  );
};

export default Account;
