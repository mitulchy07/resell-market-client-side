import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Cars from '../../Pages/Cars/Cars';
import AddItem from '../../Pages/Dashboard/AddItem/AddItem';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyItems from '../../Pages/Dashboard/MyItems/MyItems';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import ReportedItems from '../../Pages/Dashboard/ReportedItems/ReportedItems';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Login/Register';
import NoData from '../../Pages/NoData/NoData';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/category/:category',
        element: (
          <PrivateRoute>
            <Cars></Cars>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-virid.vercel.app/category/${params.category}`
          ),
      },
    ],
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/:email',
        element: <Dashboard></Dashboard>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-virid.vercel.app/dashboard/${params.email}`
          ),
      },
      {
        path: '/additem',
        element: <AddItem></AddItem>,
      },
      {
        path: '/myitems/:email',
        element: <MyItems></MyItems>,
        loader: ({ params }) =>
          fetch(`https://server-side-virid.vercel.app/myitems/${params.email}`),
      },
      {
        path: '/allbuyers',
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: '/allsellers',
        element: <AllSellers></AllSellers>,
      },
      {
        path: '/reporteditems',
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: '/myorders',
        element: <MyOrders></MyOrders>,
      },
    ],
  },
  {
    path: '*',
    element: <NoData></NoData>,
  },
]);

export default router;
