import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductList from '../pages/product-list/ProductList';
import ProductDetail from '../pages/product-detail/ProductDetail';
import Checkout from '../pages/checkout/Checkout';
import TransactionHistory from '../pages/transaction-history/TransactionHistory';
import Account from '../pages/account/Account';
import Login from '../pages/login/Login';

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
    element: <Checkout />,
  },
  {
    path: '/transaction/history',
    element: <TransactionHistory />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
