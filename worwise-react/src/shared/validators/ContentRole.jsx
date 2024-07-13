import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminHome } from "../../pages/admin/AdminHome";
import { HomeClient } from "../../pages/client/HomeClient";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

export const ContentRole = () => {
  const userDetails = localStorage.getItem('user');
  const role = userDetails ? JSON.parse(userDetails).role : null;

  if (!role) {
    return <Navigate to="/pocket_track/auth" />;
  }

  return (
    <Routes>
      {role === 'ADMIN' && <Route path="/admin" element={<AdminHome />} />}
      {role === 'CLIENT' && <Route path="/client" element={<HomeClient />} />}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
