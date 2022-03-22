import React from 'react';
import { ROLE } from './static/constants.js';

const HomePage = React.lazy(() => import('./pages/homepage.jsx'));
const AuthPage = React.lazy(() => import('./pages/authpage.jsx'));
const SignupPage = React.lazy(() => import('./pages/signuppage.jsx'));
const MenuPage = React.lazy(() => import('./pages/menupage.jsx'));
const UserPage = React.lazy(() => import('./pages/userpage.jsx'));
const PaymentPage = React.lazy(() => import('./pages/paymentpage.jsx'));
const AdminAuthPage = React.lazy(() => import('./pages/adminauthpage.jsx'));
const AdminEditPage = React.lazy(() => import('./pages/admineditpage.jsx'));
const AdminOrderPage = React.lazy(() => import('./pages/adminorderpage.jsx'));
const UserOrderPage = React.lazy(() => import('./pages/userorderpage.jsx'));
const AdminDashBoard = React.lazy(() => import('./pages/admindashboardpage.jsx'));
const AdminHomePage = React.lazy(() => import('./pages/adminHomePage.jsx'));
const ErrorPage = React.lazy(() => import('./pages/errorpage.jsx'));

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/auth',
    component: AuthPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  },
  {
    path: '/user',
    exact: true,
    component: UserPage,
    authorizeType: ROLE.USER,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
  {
    path: '/payment',
    component: PaymentPage,
  },
  {
    path: '/admin/auth',
    component: AdminAuthPage,
  },
  {
    path: '/admin',
    exact: true,
    component: AdminHomePage,
    authorizeType: ROLE.ADMIN,
  },
  {
    path: '/admin/dashboard',
    component: AdminDashBoard,
    authorizeType: ROLE.ADMIN,
  },
  {
    path: '/admin/editor',
    component: AdminEditPage,
    authorizeType: ROLE.ADMIN,
  },
  {
    path: '/admin/orders',
    component: AdminOrderPage,
    authorizeType: ROLE.ADMIN,
  },
  {
    path: '/user/orders',
    component: UserOrderPage,
    authorizeType: ROLE.USER,
  },
  {
    path: '/error',
    component: ErrorPage,
  },
];

export default routes;
