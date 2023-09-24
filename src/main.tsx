import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './Router';
import { worker } from './mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>,
);
