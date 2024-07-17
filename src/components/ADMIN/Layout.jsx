import React from 'react';
import { Sidebar } from '../ADMIN/Sidebar';
import styled from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Layout = ({ children }) => {
  return (
    <AdminContainer>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </AdminContainer>
  );
};

export default Layout;