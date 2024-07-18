import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfession = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Información del Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Profesión: {user.profession ? user.profession.name : 'No asignada'}</p>
    </div>
  );
};

export default UserProfession;
