import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
