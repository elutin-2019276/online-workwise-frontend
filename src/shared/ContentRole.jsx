import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeClient } from '../../src/pages/client/HomeClient'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage';
//Admin pages
import { UsersAdmin } from '../Pages/Admin/UsersAdmin';
import Layout from '../../src/components/ADMIN/Layout';
import NavbarLayout from '../../src/components/CLIENT/NavbarLayout';



export const ContentRole = () => {
  // Buscaremos el user
  const userDetails = localStorage.getItem('user');
  // Extraemos el rol
  const role = userDetails ? JSON.parse(userDetails).role : null;

  return (
      <Routes>
        {role === 'ADMIN' ? (
          <Route path="worwise" element={<Layout><UsersAdmin /></Layout>} />
        ) : role === 'CLIENT' ? (
          <Route path="worwise" element={<NavbarLayout><HomeClient/></NavbarLayout>} />          
        ) : (
          // Manejar otros roles o un rol desconocido mostrando una página de NotFoundPage
          <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>
    );
  };