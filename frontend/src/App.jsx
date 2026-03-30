import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./features/auth/context/AuthContext";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

import HomePage from "./features/home/pages/HomePage";
import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";
import AuthCallbackPage from "./features/auth/pages/AuthCallbackPage";
import FacilitiesCataloguePage from "./features/facility/pages/FacilitiesCataloguePage";
import FacilityDetailPage from "./features/facility/pages/FacilityDetailPage";
import UserNotificationsPage from "./features/notifications/pages/UserNotificationsPage";
import UserLayout from "./features/user/components/UserLayout";
import UserDashboard from "./features/user/pages/UserDashboard";
import BookingPage from "./features/booking/pages/BookingPage";
import MyBookingsPage from "./features/booking/pages/MyBookingsPage";
import BookingManagementPage from "./features/booking/pages/BookingManagementPage";
import CreateTicketPage from "./features/ticket/pages/CreateTicketPage";
import MyTicketsPage from "./features/ticket/pages/MyTicketsPage";
import TicketDetailPage from "./features/ticket/pages/TicketDetailPage";
import AllTicketsPage from "./features/ticket/pages/AllTicketsPage";
import NotificationPage from "./features/admin/pages/NotificationPage";
import AdminLayout from "./features/admin/components/AdminLayout";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import UserManagementPage from "./features/admin/user/pages/UserManagementPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route path="/facilities" element={<FacilitiesCataloguePage />} />
          <Route path="/facility/:id" element={<FacilityDetailPage />} />

          {/* Protected — USER routes (all share UserLayout) */}
          <Route
            element={
              <ProtectedRoute>
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route
              path="/user/notifications"
              element={<UserNotificationsPage />}
            />
            <Route path="/user/bookings" element={<MyBookingsPage />} />
            <Route path="/booking/new" element={<BookingPage />} />
            <Route path="/user/tickets" element={<MyTicketsPage />} />
            <Route path="/ticket/new" element={<CreateTicketPage />} />
            <Route path="/ticket/:id" element={<TicketDetailPage />} />
          </Route>

          {/* Protected — ADMIN only (all share AdminLayout) */}
          <Route
            element={
              <ProtectedRoute requiredRole="ADMIN">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagementPage />} />
            <Route path="/admin/bookings" element={<BookingManagementPage />} />
            <Route path="/admin/tickets" element={<AllTicketsPage />} />
            {/* <Route path="/admin/facilities" element={<FacilitiesPage />} /> */}
            <Route path="/admin/notifications" element={<NotificationPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
