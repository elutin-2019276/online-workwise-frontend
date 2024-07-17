import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faShoppingBag, faSignOutAlt, faSliders, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useUserDetails } from '../../shared/hooks/useUserDetails';

export const Sidebar = () => {
  // Obtenemos logoutSys del hook useUserDetails
  const { logoutSys } = useUserDetails(); 

  const handleLogout = () => {
    logoutSys();
    
  }

  return (
    <nav className="sidebar-navigation">
      <ul>
        <Link to="/home/worwise/users">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span className="tooltip">USERS</span>
          </li>
        </Link>
        <Link to="/home/worwise/products">
          <li>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="tooltip">PROFESSION</span>
          </li>
        </Link>
        <Link to="/home/worwise/register">
          <li>
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="tooltip">Register</span>
          </li>
        </Link>
      </ul>
      <ul className="logout">
        <li onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="tooltip">Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
