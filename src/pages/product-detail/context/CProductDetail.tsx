import React from 'react';
import { TProductDetailContext } from '../interfaces/IProductDetail';
import GetScreenSize from '../../../hooks/GetScreenSize';

export const CProductContext = React.createContext<TProductDetailContext>({
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

  const ctxProviderVal: TProductDetailContext = {
    imageDimension,
    tableWidth,
    bookingFee,
    isValidBook,
    invalidBookMsg,
    showBook,
    bookUrl,
    setBookingFee,
    setIsValidBook,
    setInvalidBookMsg,
    setShowBook,
    setBookUrl,
  };

  React.useEffect(() => {
    if (screenSize.width > 0) {
      setTableWidth(screenSize.width - 65);
    }
    if (screenSize.width < 550) {
      setImageDimension({ ...imageDimension, width: imageDimension.width / 1.6, height: imageDimension.height / 1.6 });
    }
  }, []);

  return (
    <>
      <CProductContext.Provider value={ctxProviderVal}>{props.children}</CProductContext.Provider>
    </>
  );
};

export default CProductDetail;
