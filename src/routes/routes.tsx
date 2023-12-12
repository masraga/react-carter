import { createBrowserRouter } from 'react-router-dom';
import ProductList from '../pages/product-list/ProductList';
import ProductDetail from '../pages/product-detail/ProductDetail';
import Checkout from '../pages/checkout/Checkout';
import TransactionHistory from '../pages/transaction-history/TransactionHistory';
import Account from '../pages/account/Account';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
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
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
