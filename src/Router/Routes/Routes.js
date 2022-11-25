import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home/Home';

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
    ],
  },
  {
    path: '*',
    element: 'No Route found here.',
  },
]);

export default router;
