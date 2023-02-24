import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard/dashboard-page';
import { LoginPage } from '../pages/login/login-page';
import { Register } from '../pages/register/register-page';

export function AppRoutes() {
  const ProtectedRoute = ({ user, redirectPath = '/landing' }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/login'} element={<LoginPage />} />
        <Route index path={'/register'} element={<Register />} />
        <Route element={<ProtectedRoute user={true} />}>
          <Route path={'/dashboard'} element={<DashboardPage />} />
        </Route>
        <Route path={'*'} element={<>tested</>} />
      </Routes>
    </BrowserRouter>
  );
}
