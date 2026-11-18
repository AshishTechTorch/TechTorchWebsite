import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const Overview = lazy(() => import("./pages/Overview"));
const Account = lazy(() => import("./pages/Account"));
const Admins = lazy(() => import("./pages/Admins"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const CandidateBlogs = lazy(() => import("./pages/CandidateBlogs"));
const CandidateInterests = lazy(() => import("./pages/CandidateInterests"));
const EventsPage = lazy(() => import("./pages/ContentPages").then((m) => ({ default: m.EventsPage })));
const JobsPage = lazy(() => import("./pages/ContentPages").then((m) => ({ default: m.JobsPage })));
const NewsPage = lazy(() => import("./pages/ContentPages").then((m) => ({ default: m.NewsPage })));
const UpdatesPage = lazy(() => import("./pages/ContentPages").then((m) => ({ default: m.UpdatesPage })));
const WhitepapersPage = lazy(() => import("./pages/ContentPages").then((m) => ({ default: m.WhitepapersPage })));
const Queries = lazy(() => import("./pages/Queries.jsx"));
import PermissionGate from "../components/PermissionGate.jsx";

// Drop this into <Routes> in App.jsx:  {adminRoutes}
export const adminRoutes = (
  <>
    <Route path="/admin-login" element={<Login />} />
    <Route path="/admin-signup" element={<Signup />} />
    <Route path="/admin-forgot-password" element={<ForgotPassword />} />
    <Route path="/admin-verify-otp" element={<Navigate to="/admin-forgot-password" replace />} />
    <Route path="/admin-reset-password" element={<Navigate to="/admin-forgot-password" replace />} />

    
   
<Route element={<PermissionGate allowedRoles={["admin"]} />}>
  <Route element={<AdminLayout />}>
    <Route path="/admin-dashboard" element={<Overview />} />
    <Route path="/news-insights" element={<NewsPage />} />
    <Route path="/job-openings" element={<JobsPage />} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/whitepapers" element={<WhitepapersPage />} />
    <Route path="/latest-updates" element={<UpdatesPage />} />
    <Route path="/candidate-blogs" element={<CandidateBlogs />} />
    <Route path="/candidate-interests" element={<CandidateInterests />} />
    <Route path="/admin-queries" element={<Queries />} />
    <Route path="/account" element={<Account />} />
  </Route>
</Route>

{/* team management: superadmin only */}
<Route element={<PermissionGate allowedRoles={["superadmin"]} />}>
  <Route element={<AdminLayout />}>
    <Route path="/admin-accounts" element={<Admins />} />
  </Route>
</Route>


  </>
);