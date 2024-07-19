// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import 'boxicons/css/boxicons.min.css';

// const NavbarContainer = styled.nav`
//   background-color: #343a40;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%; 
// `;

// const Logo = styled(Link)`
//   color: #fff;
//   font-size: 24px;
//   font-weight: bold;
//   text-decoration: none;

//   &:hover {
//     color: #adb5bd;
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NavLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   margin: 0 10px;
//   font-size: 16px;
//   &:hover {
//     color: #adb5bd;
//   }
// `;

// const IconLink = styled(Link)`
//   position: relative;
//   font-size: 24px;  
//   margin-left: 20px;
//   color: #fff;
//   cursor: pointer;
// `;

// export const Navbar = () => {   
//   return (
//     <NavbarContainer>
//       <Logo to="/home/worwise">Bancubito</Logo>
//       <NavLinks>
//         <NavLink to="/home/worwise/accountClient">Cuentas</NavLink>
//         <NavLink to="/home/worwise/historial">Historial</NavLink>
//         <NavLink to="/home/worwise/productsClient">Profesión</NavLink>
//         <IconLink to="/home/worwise/editProfile" className="bx bx-user-circle"></IconLink>
//       </NavLinks>
//     </NavbarContainer>
//   );
// };