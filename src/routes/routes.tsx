import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductList from '../pages/product-list/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product',
    element: <ProductList />,
  },
]);

export default router;
