import DesktopProductDetail from './desktop/DesktopProductDetail';
import CProductDetail from './context/CProductDetail';
import GetScreenSize from '../../hooks/GetScreenSize';
import MobileProductDetail from './mobile/MobileProductDetail';

const ProductDetail = () => {
  const screenSize = GetScreenSize();

  return (
    <>
      <CProductDetail>{screenSize.width <= 768 ? <MobileProductDetail /> : <DesktopProductDetail />}</CProductDetail>
    </>
  );
};

export default ProductDetail;
