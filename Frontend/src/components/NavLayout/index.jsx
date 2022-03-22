import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { USER_NAV_ITEMS, ADMIN_NAV_ITEMS, ROLE } from '../../static/constants';
import '../../style/components/navLayout.scss';
import { useAuth } from '../../context/userContext';
import { TOKEN } from '../../static/constants';

const NavLayout = (props) => {
  const { children, role, location } = props;
  const { pathname } = location;
  const navItems = role === ROLE.USER ? USER_NAV_ITEMS : ADMIN_NAV_ITEMS;
  const previousPath = role === ROLE.USER ? '/' : '/admin/auth';
  const { authLogout } = useAuth();

  const onLogOutClick = useCallback(() => {
    if (role !== ROLE.ADMIN) return;
    authLogout(TOKEN.ADMIN);
  }, [role, authLogout]);

  return (
    <div className="user-page">
      <aside className="user-page__nav-wrapper">
        <nav className="user-page__navbar">
          {navItems.map((item) => {
            const linkClasses = classNames({
              'user-page__item': true,
              'user-page__item--actived': item.path === pathname,
            });
            return (
              <Link to={item.path} key={item.path} className={linkClasses} {...item}>
                <ReactSVG className="user-page__item-icon" src={item.icon} />
              </Link>
            );
          })}
        </nav>
        <Link to={previousPath}>
          <span className="user-page__logout" onClick={onLogOutClick} />
        </Link>
      </aside>
      <section className="user-page__section">{children}</section>
    </div>
  );
};

NavLayout.propTypes = {
  role: PropTypes.string.isRequired,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withRouter(NavLayout);
