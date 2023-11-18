import React from 'react';
import { Drawer, Grid, Typography, useTheme } from '@mui/material';
import Buttons from '../../../components/atoms/button';
import Paper from '../../../components/atoms/paper';
import Container from '../../../components/atoms/container';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import './MobileProductDetail.css';
import { zodResolver } from '@hookform/resolvers/zod';
import FormLabel from '../../../components/atoms/form-label';
import DatePicker from '../../../components/atoms/date-picker';
import { CProductContext } from '../context/CProductDetail';
import Box from '../../../components/atoms/box';
import FormatMoney from '../../../hooks/FormatMoney';
import '@fontsource/open-sans/600.css';

const bookSchema = z.object({
  dateStart: z.coerce.date().min(moment().subtract(1, 'days').toDate(), 'tidak bisa memesan sebelum harini'),
  dateEnd: z.coerce.date().min(moment().toDate(), 'minimal pemesanan 1 hari'),
});

type TBookSchema = z.infer<typeof bookSchema>;

const BookingForm = () => {
  const muiTheme = useTheme();
  const productContext = React.useContext(CProductContext);
  const [drawerState, setDrawerState] = React.useState<{ anchor: 'top' | 'left' | 'bottom' | 'right'; open: boolean }>({
    anchor: 'bottom',
    open: false,
  });

  const { control, handleSubmit } = useForm<TBookSchema>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange',
    defaultValues: {
      dateStart: undefined,
      dateEnd: undefined,
    },
  });

  const onSubmit = (data: TBookSchema) => {
    const bookDay = moment(data.dateEnd).diff(data.dateStart, 'days');
    productContext.setShowBook(true);
    if (bookDay < 0) {
      productContext.setInvalidBookMsg('jumlah hari peminjaman tidak valid');
      productContext.setIsValidBook(false);
      productContext.setBookUrl('');
      console.log(productContext.invalidBookMsg);
      return false;
    }
    const cost = bookDay * productContext.productTotalFee;
    productContext.setBookingFee(cost);
    productContext.setIsValidBook(true);
    productContext.setInvalidBookMsg('');
    productContext.setBookUrl('/booking/summary/INV0001');
    setDrawerState({ ...drawerState, open: false });
  };

  const cancelPayment = (e: any) => {
    productContext.setIsValidBook(false);
    productContext.setBookUrl('');
    setDrawerState({ ...drawerState, open: true });
  };

  return (
    <>
      <Paper sx={{ paddingTop: 2, paddingBottom: 2, width: '100%', position: 'fixed', bottom: 0 }}>
        <Container>
          {!productContext.isValidBook ? (
            <Buttons
              onClick={() => {
                setDrawerState({ ...drawerState, open: true });
              }}
              variant="contained"
              color="warning"
              fullWidth={true}
            >
              Cek ketersediaan
            </Buttons>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="body1" color={muiTheme.palette.text.disabled}>
                  subtotal
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {FormatMoney(productContext.bookingFee)}
                </Typography>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <Buttons variant="text" color="warning" onClick={cancelPayment}>
                  batal
                </Buttons>
                <Buttons variant="contained" color="warning">
                  Bayar
                </Buttons>
              </Box>
            </Box>
          )}
        </Container>
      </Paper>
      <Drawer
        anchor={drawerState.anchor}
        open={drawerState.open}
        onClose={() => {
          setDrawerState({ ...drawerState, open: false });
        }}
      >
        {/* START: BOOKING FORM */}
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              {productContext.invalidBookMsg != '' ? (
                <Grid item paddingTop={3} xs={12}>
                  <Typography variant="body1" color="error">
                    {productContext.invalidBookMsg}
                  </Typography>
                </Grid>
              ) : (
                <></>
              )}
              <Grid item xs={12} paddingTop={3}>
                <FormLabel label="Tanggal mulai" />
                <Controller
                  name="dateStart"
                  control={control}
                  render={({ field: { onChange, name, disabled, onBlur, value }, formState: { errors } }) => (
                    <DatePicker
                      onChange={onChange}
                      name={name}
                      onBlur={onBlur}
                      disabled={disabled}
                      fullWidth={true}
                      defaultValue={value}
                      helperText={errors.dateStart?.message}
                      error={!!errors.dateStart}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} item paddingTop={3}>
                <FormLabel label="Tanggal selesai" />
                <Controller
                  name="dateEnd"
                  control={control}
                  render={({ field: { onChange, name, disabled, onBlur, value }, formState: { errors } }) => (
                    <DatePicker
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      disabled={disabled}
                      defaultValue={value}
                      fullWidth={true}
                      helperText={errors.dateEnd?.message}
                      error={!!errors.dateEnd}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} paddingY={3}>
                <Buttons variant="contained" color="warning" fullWidth>
                  cek ketersediaan
                </Buttons>
              </Grid>
            </Grid>
          </form>
        </Container>
        {/* END: BOOKING FORM */}
      </Drawer>
    </>
  );
};

export default BookingForm;
