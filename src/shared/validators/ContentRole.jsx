import React from 'react';
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
// La importación de los Home
import { AdminHome } from "../../pages/admin/AdminHome";
import { HomeClient } from "../../pages/client/HomeClient";
import { Navigate, Route, Routes } from 'react-router-dom';

export const ContentRole = () => {
  const userDetails = localStorage.getItem('user');
  const role = userDetails ? JSON.parse(userDetails).role : null;

  if (!role) {
    return <Navigate to="/worwise/auth" />;
  }

  return (
    <Routes>
      {role === 'Admin' && <Route path="/admin" element={<AdminHome />} />}
      {role === 'Solicitante de empleo' && <Route path="/client" element={<HomeClient />} />}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
