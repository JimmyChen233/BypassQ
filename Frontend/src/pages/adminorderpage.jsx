import React from 'react';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';

const AdminOrderPage = (props) => {
  return <NavLayout role={ROLE.ADMIN}>order</NavLayout>;
};

export default AdminOrderPage;
