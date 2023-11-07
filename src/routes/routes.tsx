import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductList from '../pages/product-list/ProductList';
import ProductDetail from '../pages/product-detail/ProductDetail';
import BookingSummary from '../pages/booking-summary/BookingSummary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product',
    element: <ProductList />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/booking/summary/:id',
    element: <BookingSummary />,
  },
]);

export default router;
