import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom"
import { LoginPage } from "../pages/login-page";

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
                <Route element={<ProtectedRoute user={true} />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}