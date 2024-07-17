// src/hooks/useListJobSeekers.js
import { useState, useEffect } from 'react';
import { getJobSeekersRequest } from '../services/api.js'

const useListJobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobSeekers = async () => {
      setLoading(true);
      try {
        const data = await getJobSeekersRequest();
        setJobSeekers(data);
      } catch (err) {
        setError('Error al obtener la lista de solicitantes de empleo.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobSeekers();
  }, []);

  return {
    jobSeekers,
    loading,
    error,
  };
};

export default useListJobSeekers;

