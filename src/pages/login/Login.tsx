import React from "react";
import { Divider, Grid, Link, TextField, Typography, useTheme } from '@mui/material';
import Container from '../../components/atoms/container';
import Paper from '../../components/atoms/paper';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import './Login.css';
import '@fontsource/open-sans/600.css';
import { zodResolver } from '@hookform/resolvers/zod';
import FormLabel from '../../components/atoms/form-label';
import CustomerHeader from '../../components/organisms/customer-header/CustomerHeader';
import Buttons from '../../components/atoms/button';
import { useNavigate } from 'react-router';

const loginSchema = z.object({
  email: z.string().min(1, 'email wajib diisi').email('email tidak valid'),
  password: z.string().min(1, 'password wajib diisi'),
});

type TLoginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const muiTheme = useTheme();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isUser, setIsUser] = React.useState(false);

  const onSubmit = (data: TLoginSchema) => {
    console.log(data);
    setIsUser(true);
  }

  const redirectLogin = () => {
    if(isUser) {
      navigate("/product");
    }
  }

  React.useEffect(() => {
    redirectLogin();
  }, [isUser]);

  return (
    <>
      <CustomerHeader />
      <Paper className="auth-container">
        <Container>
          <Typography variant="h5" gutterBottom fontWeight={600} align="center">
            APP NAME
          </Typography>
          <Typography
            gutterBottom
            sx={{ paddingBottom: 2 }}
            variant="body1"
            color={muiTheme.palette.text.disabled}
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero
          </Typography>
          <Divider />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} paddingBottom={2}>
                <FormLabel label="Email" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      type="email"
                      autoFocus
                      name={name}
                      onChange={onChange}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      disabled={disabled}
                      helperText={errors.email?.message}
                      error={!!errors.email}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <FormLabel label="Password" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      type="password"
                      name={name}
                      onChange={onChange}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      disabled={disabled}
                      helperText={errors.password?.message}
                      error={!!errors.password}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={1}>
                <Buttons variant="contained" fullWidth color="warning" type="submit">
                  Login
                </Buttons>
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <Buttons variant="text" fullWidth color="warning" to="/register">
                  Daftar akun baru
                </Buttons>
              </Grid>
            </Grid>
          </form>
          <br />
          <Divider sx={{ paddingBottom: 1 }} />
          <Typography variant="body1" color={muiTheme.palette.text.disabled} align="right">
            design by{' '}
            <Link
              href="/product"
              sx={{ textDecoration: 'none', fontWeight: 600 }}
              color={muiTheme.palette.warning.light}
            >
              koderpedia
            </Link>
          </Typography>
        </Container>
      </Paper>
    </>
  );
};

export default Login;
