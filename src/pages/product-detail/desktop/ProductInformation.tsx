import React from 'react';
import { CardMedia, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Box from '../../../components/atoms/box';
import Paper from '../../../components/atoms/paper';
import { IProductInformation } from '../interfaces/IProductDetail';
import { useTheme } from '@mui/material/styles';
import { CProductContext } from '../context/CProductDetail';
import FormatMoney from '../../../hooks/FormatMoney';
import '../ProductDetail.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/400.css';

const ProductInformation = (props: IProductInformation) => {
  const muiTheme = useTheme();
  const detailContext = React.useContext(CProductContext);

  return (
    <>
      <Paper className="desktop__product-detail-container">
        <Box className="desktop__product-detail-image">
          <CardMedia
            sx={{
              height: detailContext.imageDimension.height,
              width: detailContext.imageDimension.width,
              objectFit: 'contain',
            }}
            image={props.image}
            title={props.name}
            className="image-info"
          />
        </Box>
        <Box className="desktop__product-detail-info">
          <Typography gutterBottom={true} variant="h4" sx={{ fontWeight: 600 }}>
            {props.name}
          </Typography>
          <Box className="stock-rating">
            <Typography variant="h6" sx={{ color: muiTheme.palette.text.disabled }}>
              stok: 50
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant="h6">
                <StarIcon color="warning" fontSize="medium" />
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: '1.1rem', marginTop: -0.1, paddingLeft: 0.5 }}
              >
                {props.rating}
              </Typography>
            </Box>
          </Box>
          <Box className="description">
            <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aperiam dicta dolores distinctio
              reiciendis sequi quos magni explicabo, iste recusandae nisi adipisci vitae numquam corporis mollitia a ab
              eos voluptates.
            </Typography>
          </Box>
          <Box className="price">
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              {FormatMoney(props.totalFee)}
            </Typography>
            <Typography variant="h6" style={{ fontWeight: 400 }} className="fee-label">
              /{props.feeLabel}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ProductInformation;
