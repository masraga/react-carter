import DesktopProductDetail from './desktop/DesktopProductDetail';
import CProductDetail from './context/CProductDetail';
import GetScreenSize from '../../hooks/GetScreenSize';

const ProductDetail = () => {
  const screenSize = GetScreenSize();
  return (
    <>
      <CProductDetail>{screenSize.width <= 768 ? <DesktopProductDetail /> : <DesktopProductDetail />}</CProductDetail>
    </>
  );
};

export default ProductDetail;
