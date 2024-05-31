import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/app/app';
import { Suspense } from 'react';
import { LazyAboutPage } from '@/pages/about';
import { LazyShopPage } from '@/pages/shop';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'loading...'}>
            <LazyAboutPage />
            {/* <LazyShopPage /> */}
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={'loading...'}>
            <LazyShopPage />
            {/* <ShopPage /> */}
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
