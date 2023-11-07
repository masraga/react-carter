import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Paper from '../../../components/atoms/paper';
import Box from '../../../components/atoms/box';
import Grid from '@mui/material/Grid';
import DatePicker from '../../../components/atoms/date-picker';
import Container from '../../../components/atoms/container';
import FormLabel from '../../../components/atoms/form-label';
import Buttons from '../../../components/atoms/button';
import moment from 'moment';
import { CProductContext } from '../context/CProductDetail';
import 'dayjs/locale/zh-cn';

const bookSchema = z.object({
  dateStart: z.coerce
    .date()
    .min(moment().subtract(1, 'days').toDate(), 'tidak bisa menggunakan tanggal sebelum harini'),
  dateEnd: z.coerce.date().min(moment().subtract(1, 'days').toDate(), 'tidak bisa menggunakan tanggal sebelum harini'),
});
type TFormBook = z.infer<typeof bookSchema>;

const BookingForm = () => {
  const cProductContext = React.useContext(CProductContext);
  const { control, handleSubmit } = useForm<TFormBook>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange',
    defaultValues: {
      dateStart: undefined,
      dateEnd: undefined,
    },
  });
  const onSubmit = (data: TFormBook) => {
    const bookDay = moment(data.dateEnd).diff(data.dateStart, 'days');
    cProductContext.setShowBook(true);
    if (bookDay < 0) {
      cProductContext.setInvalidBookMsg('jumlah hari peminjaman tidak valid');
      cProductContext.setIsValidBook(false);
      cProductContext.setBookUrl('');
      return false;
    }
    const cost = bookDay * 5000;
    cProductContext.setBookingFee(cost);
    cProductContext.setIsValidBook(true);
    cProductContext.setBookUrl('/booking/summary/INV0001');
  };

  return (
    <>
      <Paper sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Box>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={4} xs={12}>
                  <FormLabel label="Tanggal mulai" />
                  <Controller
                    name="dateStart"
                    control={control}
                    render={({ field: { onChange, name, disabled, onBlur }, formState: { errors } }) => (
                      <DatePicker
                        onChange={onChange}
                        name={name}
                        onBlur={onBlur}
                        disabled={disabled}
                        fullWidth={true}
                        helperText={errors.dateStart?.message}
                        error={!!errors.dateStart}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={4} xs={12}>
                  <FormLabel label="Tanggal selesai" />
                  <Controller
                    name="dateEnd"
                    control={control}
                    render={({ field: { onChange, name, disabled, onBlur }, formState: { errors } }) => (
                      <DatePicker
                        onChange={onChange}
                        name={name}
                        onBlur={onBlur}
                        disabled={disabled}
                        fullWidth={true}
                        helperText={errors.dateEnd?.message}
                        error={!!errors.dateEnd}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={4} xs={12}>
                  <FormLabel label="&nbsp;" />
                  <Buttons variant="contained" color="warning" fullWidth={true}>
                    Cek ketersediaan
                  </Buttons>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Paper>
    </>
  );
};

export default BookingForm;
