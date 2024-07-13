import React from 'react';
import './Sidebar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faShoppingBag, faSignOutAlt, faSliders, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { useUserDetails } from '../../Shared/Hooks/useUserDetails';

export const Sidebar = () => {
  // Obtenemos logoutSys del hook useUserDetails
  const { logoutSys } = useUserDetails(); 

  const handleLogout = () => {
    logoutSys();
    
  }

  return (
    <nav className="sidebar-navigation">
      <ul>
        <Link to="/home/banco/users">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span className="tooltip">USERS</span>
          </li>
        </Link>
        <Link to="/home/banco/accounts">
          <li>
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="tooltip">ACCOUNTS</span>
          </li>
        </Link>
        <Link to="/home/banco/products">
          <li>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="tooltip">PRODUCTS</span>
          </li>
        </Link>
        <Link to="/home/banco/settings">
          <li>
            <FontAwesomeIcon icon={faSliders} />
            <span className="tooltip">Settings</span>
          </li>
        </Link>
        <Link to="/home/banco/register">
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
