import homeIcon from '../assets/home.svg';
import ordersIcon from '../assets/order.svg';
import adminHomeIcon from '../assets/adminHome.svg';
import dashboardIcon from '../assets/dashboard.svg';
import adminEditorIcon from '../assets/adminEditor.svg';

export const USER_NAV_ITEMS = [
  {
    path: '/user',
    icon: homeIcon,
  },
  {
    path: '/user/orders',
    icon: ordersIcon,
  },
];

export const ADMIN_NAV_ITEMS = [
  {
    path: '/admin',
    icon: adminHomeIcon,
  },
  {
    path: '/admin/dashboard',
    icon: dashboardIcon,
  },
  {
    path: '/admin/editor',
    icon: adminEditorIcon,
  },
];

export const ROLE = {
  USER: 'user',
  ADMIN: 'admin',
};

export const INPUT_ACCEPTANCE = {
  IMAGE: '.jpg, .jpeg, .png',
};

export const TOKEN = {
  USER: 'userToken',
  ADMIN: 'adminToken',
};
