import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/userContext';
import { ROLE } from '../../static/constants';

const ProtectRoute = (props) => {
  const { component: Component, authorizeType, ...rest } = props;
  const { user, adminUser, status } = useAuth();

  //用status不是最好的办法
  if (status) {
    return (
      <Route
        {...rest}
        render={(routeProps) => {
          if (isEmpty(user) && authorizeType === ROLE.USER) {
            return <Redirect to="/auth" />;
          }

          if (isEmpty(adminUser) && authorizeType === ROLE.ADMIN) {
            return <Redirect to="/admin/auth" />;
          }

          if (user || adminUser) return <Component {...routeProps} />;
        }}
      />
    );
  } else {
    return null;
  }
};

export default ProtectRoute;
