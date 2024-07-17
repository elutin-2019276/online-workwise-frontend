import React from 'react';
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { AdminHome } from "../../pages/admin/AdminHome";
import { HomeClient } from "../../pages/client/HomeClient";
import { Navigate, Route, Routes } from 'react-router-dom';
//Admin Pages
import Layout from '../../components/ADMIN/Layout';
import NavbarLayout from '../../components/CLIENT/NavbarLayout';

export const ContentRole = () => {
  const userDetails = localStorage.getItem('user');
  const role = userDetails ? JSON.parse(userDetails).role : null;

  if (!role) {
    return <Navigate to="/worwise/auth" />;
  }

  return (
    <Routes>
      {role === 'Admin' ? (
        <Route path="/admin" element={<Layout><AdminHome /></Layout>} />
      ) : role === 'Solicitante de empleo' ? (
        <Route path="/client" element={<NavbarLayout><HomeClient /></NavbarLayout>} />
      ) : (
        <Route path="*" element={<NotFoundPage />} />
      )}
    </Routes>
  );
};
