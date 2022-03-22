import React from 'react';
import NavLayout from '../components/NavLayout';
import { ROLE } from '../static/constants';
import { useAuth } from '../context/userContext';
import UserContent from '../components/userContent';

const UserPage = (props) => {
  const { user } = useAuth();
  return (
    <NavLayout role={ROLE.USER}>
      <UserContent>
        <div className="userPage-id">Welcome Back, {user.firstname}</div>
      </UserContent>
    </NavLayout>
  );
};

export default UserPage;
