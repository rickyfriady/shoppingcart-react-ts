import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainApp = () => {
  return (
    <div>
      <Suspense fallback={<h1>suspend</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainApp;
