import React from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import './Register.css';
import '@fontsource/open-sans/600.css';
import { zodResolver } from '@hookform/resolvers/zod';
import Paper from '../../components/atoms/paper';
import Container from '../../components/atoms/container';
import { Divider, Grid, TextField, Typography, useTheme } from '@mui/material';
import FormLabel from '../../components/atoms/form-label';
import Buttons from '../../components/atoms/button';
import { useNavigate } from 'react-router';

const registerSchema = z
  .object({
    name: z.string().min(1, 'nama wajib diisi'),
    email: z.string().min(1, 'email wajib diisi'),
    password: z.string().min(1, 'password wajib diisi'),
    rePassword: z.string().min(1, 'password wajib diisi'),
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'password dan re-type password harus sama',
    path: ['rePassword'],
  });

type TRegisterSchema = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const muiTheme = useTheme();
  const { control, handleSubmit } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    },
  });
  const [isUser, setIsUser] = React.useState(false);

  const onSubmit = (data: TRegisterSchema) => {
    console.log(data);
    setIsUser(true);
  };

  React.useEffect(() => {
    if(isUser) {
      navigate("/product");
    }
  }, [isUser]);

  return (
    <>
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
                <FormLabel label="nama" />
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      disabled={disabled}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      autoFocus
                      helperText={errors.name?.message}
                      error={!!errors.name}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <FormLabel label="email" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      name={name}
                      type="email"
                      onChange={onChange}
                      disabled={disabled}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      helperText={errors.email?.message}
                      error={!!errors.email}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <FormLabel label="password" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      name={name}
                      type="password"
                      onChange={onChange}
                      disabled={disabled}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      helperText={errors.password?.message}
                      error={!!errors.password}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <FormLabel label="Re-type password" />
                <Controller
                  name="rePassword"
                  control={control}
                  render={({ field: { onChange, name, value, disabled }, formState: { errors } }) => (
                    <TextField
                      name={name}
                      type="password"
                      onChange={onChange}
                      disabled={disabled}
                      defaultValue={value}
                      fullWidth
                      size="small"
                      helperText={errors.rePassword?.message}
                      error={!!errors.rePassword}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <Buttons type="submit" variant="contained" fullWidth color="warning">
                  Daftar
                </Buttons>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </>
  );
};

export default Register;
