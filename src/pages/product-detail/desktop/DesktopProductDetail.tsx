import Grid from '@mui/material/Grid';
import ProductInformation from './ProductInformation';
import CustomerHeader from '../../../components/organisms/customer-header/CustomerHeader';
import Container from '../../../components/atoms/container';
import BookingForm from './BookingForm';
import ProductSpecification from './PoductSpecification';
import BookingAvailability from './BookingAvailability';
import BookingSummary from './BookingSummary';

const DBProduct = [
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    spec: [
      {
        type: 'jumlah',
        value: 50,
      },
      {
        type: 'variasi ban',
        value: '50mm',
      },
      {
        type: 'jenis',
        value: 'baru',
      },
    ],
  },
];

const DBBookAvail = [
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    dateStart: new Date(),
    dateEnd: new Date(),
  },
];

const DesktopProductDetail = () => {
  return (
    <>
      <CustomerHeader />
      <Container maxWidth="lg">
        <ProductInformation
          name="MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M"
          image="https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd"
          feeLabel="hari"
          stock={50}
          rating={4.5}
          totalFee={50000}
        />
        <br />
        <BookingForm />
        <br />
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <ProductSpecification spec={DBProduct[0].spec} />
          </Grid>
          <Grid item lg={6}>
            <BookingAvailability schedule={DBBookAvail} />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BookingSummary />
    </>
  );
};

export default DesktopProductDetail;
