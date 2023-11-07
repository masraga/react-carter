import CustomerHeader from '../../components/organisms/customer-header/CustomerHeader';
import CustomerFooter from '../../components/organisms/customer-footer/CustomerFooter';
import Container from '../../components/atoms/container';
import Box from '../../components/atoms/box';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';

const DBProduct: Array<{
  name: string;
  image: string;
  stock: number;
  rating: number;
  totalFee: number;
  url: string;
  feeLabel: string;
}> = [
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE L',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
  {
    name: 'MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M',
    image: 'https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd',
    feeLabel: 'hari',
    stock: 50,
    rating: 4.5,
    totalFee: 50000,
    url: '/product/bmx-downhill-spp',
  },
];

type TProductCard = {
  name: string;
  image: string;
  url: string;
  stock?: number;
  rating?: number;
  totalFee: number;
  feeLabel: string;
};

const ProductCard = (props: TProductCard) => {
  const muiTheme = useTheme();
  return (
    <>
      <Grid item sm={4}>
        <Card>
          <CardActionArea href={props.url}>
            <CardMedia sx={{ height: 220, objectFit: 'contain' }} image={props.image} title="green iguana" />
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ fontWeight: muiTheme.typography.fontWeightBold, marginBottom: 2 }}
                component="div"
              >
                {props.name}
              </Typography>
              <Grid container>
                <Grid xs={6}>
                  <Typography variant="body2" color={muiTheme.palette.text.disabled}>
                    stok : {props.stock}
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography variant="caption">
                      <StarIcon color="warning" fontSize="small" />
                    </Typography>
                    <Typography variant="body2">{props.rating}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <br />
              <Box sx={{ display: 'flex' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: muiTheme.typography.fontWeightBold }}
                  component="div"
                >
                  {props.totalFee}
                </Typography>
                <Typography sx={{ marginTop: 1 }} variant="body2">
                  /{props.feeLabel}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

const ProductList = () => {
  const ShowProduct = () => {
    let CardList: Array<React.ReactNode> = [];
    DBProduct.forEach((v) => {
      CardList.push(ProductCard(v));
    });

    return (
      <>
        <Container maxWidth="lg">
          <Box>
            <Grid container spacing={4}>
              {CardList}
            </Grid>
          </Box>
        </Container>
      </>
    );
  };

  return (
    <>
      <CustomerHeader />
      <ShowProduct />
      <CustomerFooter menu="dashboard" />
    </>
  );
};

export default ProductList;
