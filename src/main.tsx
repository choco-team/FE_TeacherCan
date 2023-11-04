import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>,
);
