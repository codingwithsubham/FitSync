import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userLogout } from '../../store/auth/authEffect';
import { useScroll } from '../../utils/useScroll';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, profile } = useSelector((state) => state.auth);
  const [openSideNav, setOpenSideNav] = useState(false);
  const { scrollDirection } = useScroll();

  return (
    isAuthenticated && (
      <div
        className={`navbar-fixed${scrollDirection === 'up' ? ' stickey' : ' '}`}
      >
        <nav className="nav-extended my-nav">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              <div className="idfy app-logo">
                Fit<b>Sync</b>
              </div>
            </Link>
            <Link
              to="#"
              data-target="mobile-demo"
              className="sidenav-trigger"
              onClick={() => setOpenSideNav(!openSideNav)}
            >
              <i className="material-icons">menu</i>
            </Link>
            <Link
              to="/match-requests"
              data-target="mobile-demo"
              className="notifications sidenav-trigger"
            >
              <i className="material-icons">contacts</i>
              {profile?.profData?.matchRequests?.length &&
                profile?.profData?.matchRequests?.length > 0 && (
                  <span className="count">
                    {profile?.profData?.matchRequests?.length}
                  </span>
                )}
            </Link>
            <Link
              to="/inbox"
              data-target="mobile-demo"
              className="notifications sidenav-trigger"
            >
              <i className="material-icons">chat_bubble_outline</i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#" onClick={() => dispatch(userLogout())}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <NavLink to="/home">
                  <i className="material-icons">home</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/workout">
                  <i className="material-icons">fitness_center</i>
                </NavLink>
              </li>
              {/* <li className="tab">
                <NavLink to="/gyms">
                  <i className="material-icons">directions_run</i>
                </NavLink>
              </li> */}
              <li className="tab">
                <NavLink to="/treatment">
                  <i className="material-icons">accessibility</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/search">
                  <i className="material-icons">people</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/profile">
                  <i className="material-icons">person</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {openSideNav && (
          <div
            className="side-nav-bg"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
        )}
        <ul
          className={`sidenav${openSideNav ? ' open' : ' close'}`}
          id="mobile-demo"
        >
          <li>
            <Link to="#" onClick={() => setOpenSideNav(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setOpenSideNav(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                dispatch(userLogout());
                setOpenSideNav(false);
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Navbar;
