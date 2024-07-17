import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useToken = () =>{
    const [name, setName] = useState('');
    const [uid, setUid] = useState('');
    
    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            setName(decodedToken.name || '');
            setUid(decodedToken.uid || 'N/A')
          } catch (error) {
            console.error('Error al decodificar el token JWT:', error);
          }
        }
      }, []);

      return{
        name,
        uid
      }

    }