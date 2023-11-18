import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Box from '../../../components/atoms/box';
import IconButton from '../../../components/molecules/icon-button';
import { CProductContext } from '../context/CProductDetail';
import FormatMoney from '../../../hooks/FormatMoney';
import Container from '../../../components/atoms/container';
import Paper from '../../../components/atoms/paper';
import './MobileProductDetail.css';
import '@fontsource/open-sans/600.css';
import BookingForm from './BookingForm';

const MobileProductDetail = () => {
  const productContext = React.useContext(CProductContext);

  const SpecContainer = () => {
    let specItem: Array<React.ReactNode> = [];
    for (let spec of productContext.productSpec) {
      specItem.push(
        <>
          <TableRow key={Math.random()}>
            <TableCell key={Math.random()}>
              <Typography fontWeight={600}>{spec.type} : </Typography>
            </TableCell>
            <TableCell key={Math.random()}>
              <Typography>{spec.value}</Typography>
            </TableCell>
          </TableRow>
        </>,
      );
    }
    return (
      <>
        <Table>
          <TableBody>{specItem}</TableBody>
        </Table>
      </>
    );
  };

  const BookAvailContainer = () => {
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tanggal Mulai</TableCell>
              <TableCell>Tanggal Selesai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>10 nov 2023</TableCell>
              <TableCell>12 nov 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10 nov 2023</TableCell>
              <TableCell>12 nov 2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  };

  return (
    <>
      {/* START: PRODUCT INFORMATION */}
      <Box className="button-back-container">
        <IconButton size="small" className="button-back" title="kembali" href="/product" color="#fff">
          <ArrowBack />
        </IconButton>
      </Box>
      <Card sx={{ borderRadius: 0, boxShadow: 'none' }}>
        <CardMedia
          title={productContext.productName}
          src={productContext.productImage}
          component="img"
          image={productContext.productImage}
          sx={{ height: 275 }}
        />
        <CardContent>
          <Box>
            <Typography variant="h6">{productContext.productName}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Rating
              name="read-only"
              value={productContext.productRating}
              sx={{ paddingTop: 1 }}
              size="small"
              readOnly
            />
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 15, marginTop: 0.5, marginLeft: 0.5 }}>
              ({productContext.productRating})
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: 2.5 }}>
            <Typography variant="h5" fontWeight={600}>
              {FormatMoney(productContext.productTotalFee)}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: 0.5 }}>
              /{productContext.productFeelabel}
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" align="justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore quis deserunt veritatis eaque
              voluptates beatae vel eius quidem corrupti quia quisquam dolor earum, iste repellat est veniam autem enim!
            </Typography>
          </Box>
        </CardContent>
      </Card>
      {/* END: PRODUCT INFORMATION */}
      <br />
      {/* START: PRDOUCT SPECIFICATION */}
      <Paper className="content-container" sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Container>
          <Box>
            <Typography gutterBottom variant="h6" fontWeight={600}>
              Spesifikasi Produk
            </Typography>
            <SpecContainer />
          </Box>
        </Container>
      </Paper>
      {/* END: PRDOUCT SPECIFICATION */}
      <br />
      {/* START: BOOKING AVAILABILITY */}
      <Paper className="content-container" sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Container>
          <Box>
            <Typography gutterBottom variant="h6" fontWeight={600}>
              Jadwal telah dipesan
            </Typography>
            <BookAvailContainer />
          </Box>
        </Container>
      </Paper>
      {/* END: BOOKING AVAILABILITY */}
      <br />
      <br />
      <br />
      <br />
      {/* START: BOOKING FORM */}
      <BookingForm />
      {/* END: BOOKING FORM */}
    </>
  );
};

export default MobileProductDetail;
