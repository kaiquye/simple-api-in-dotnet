import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard/dashboard-page';
import { LoginPage } from '../pages/login/login-page';
import { Register } from '../pages/register/register-page';
import { AuthContext, AuthContextProvider } from '../context/auth.context';
import React from 'react';
import { NotFoundPage } from '../pages/not-found/not-found.page';
export function AppRoutes() {
  const { user } = React.useContext(AuthContext);
  const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route index path={'/login'} element={<LoginPage />} />
          <Route index path={'/register'} element={<Register />} />
          <Route element={<ProtectedRoute user={true} />}>
            <Route path={'/dashboard'} element={<DashboardPage />} />
          </Route>
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
