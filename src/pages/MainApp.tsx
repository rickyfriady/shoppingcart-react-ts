import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainApp = () => {
  return (
    <div>
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainApp;
