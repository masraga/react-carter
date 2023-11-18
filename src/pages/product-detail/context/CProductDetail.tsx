import React from 'react';
import { TProductDetailContext } from '../interfaces/IProductDetail';
import GetScreenSize from '../../../hooks/GetScreenSize';

export const CProductContext = React.createContext<TProductDetailContext>({
  productName: '',
  productImage: '',
  productFeelabel: '',
  productStock: 0,
  productTotalFee: 0,
  productSpec: [{ type: null, value: null }],
  productRating: 0,
  imageDimension: {
    width: 550,
    height: 350,
  },
  tableWidth: 0,
  bookingFee: 0,
  isValidBook: false,
  invalidBookMsg: '',
  showBook: false,
  bookUrl: '',
  setBookingFee: null,
  setIsValidBook: null,
  setInvalidBookMsg: null,
  setShowBook: null,
  setBookUrl: null,
  setProductName: null,
  setProductImage: null,
  setProductFeelabel: null,
  setProductStock: null,
  setProductTotalFee: null,
  setProductSpec: null,
  setProductRating: null,
});

const CProductDetail = (props: { children: React.ReactNode }) => {
  const screenSize = GetScreenSize();
  const [imageDimension, setImageDimension] = React.useState({
    width: 550,
    height: 350,
  });
  const [tableWidth, setTableWidth] = React.useState(0);
  const [bookingFee, setBookingFee] = React.useState(0);
  const [isValidBook, setIsValidBook] = React.useState(false);
  const [invalidBookMsg, setInvalidBookMsg] = React.useState('');
  const [showBook, setShowBook] = React.useState(false);
  const [bookUrl, setBookUrl] = React.useState('');
  const [productName, setProductName] = React.useState('');
  const [productImage, setProductImage] = React.useState('');
  const [productFeelabel, setProductFeelabel] = React.useState('');
  const [productStock, setProductStock] = React.useState(0);
  const [productTotalFee, setProductTotalFee] = React.useState(0);
  const [productRating, setProductRating] = React.useState(0);
  const [productSpec, setProductSpec] = React.useState<Array<{ type: string; value: any }>>([]);

  const ctxProviderVal: TProductDetailContext = {
    imageDimension,
    tableWidth,
    bookingFee,
    isValidBook,
    invalidBookMsg,
    showBook,
    bookUrl,
    productName,
    productImage,
    productFeelabel,
    productStock,
    productTotalFee,
    productSpec,
    productRating,
    setBookingFee,
    setIsValidBook,
    setInvalidBookMsg,
    setShowBook,
    setBookUrl,
    setProductName,
    setProductImage,
    setProductFeelabel,
    setProductStock,
    setProductTotalFee,
    setProductSpec,
    setProductRating,
  };

  React.useEffect(() => {
    if (screenSize.width > 0) {
      setTableWidth(screenSize.width - 65);
    }
    if (screenSize.width < 550) {
      setImageDimension({ ...imageDimension, width: imageDimension.width / 1.6, height: imageDimension.height / 1.6 });
    }

    //get product detail
    setProductName('MTB 27.5 INCH PACIFIC VIGILON 1.0 ALLOY SIZE M');
    setProductImage('https://down-id.img.susercontent.com/file/33ca9e0f8357f0a80367de45f886fbfd');
    setProductFeelabel('hari');
    setProductStock(50);
    setProductTotalFee(50000);
    setProductSpec([...productSpec, { type: 'jumlah', value: 50 }, { type: 'variasi ban', value: '55mm' }]);
    setProductRating(4.5);
  }, []);

  return (
    <>
      <CProductContext.Provider value={ctxProviderVal}>{props.children}</CProductContext.Provider>
    </>
  );
};

export default CProductDetail;
