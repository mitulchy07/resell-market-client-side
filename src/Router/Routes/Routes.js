import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
  },
  {
    path: '*',
    element: 'No Route found here.',
  },
]);

export default router;
