// src/hooks/useRegisterJobSeeker.js
import { useState } from 'react';
import { addJobSeekerRequest } from '../../services/api.js'

const useRegisterJobSeeker = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    curriculumVitae: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, curriculumVitae: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.name || !formData.curriculumVitae) {
      setError('El nombre y el currículum vitae son obligatorios.');
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('curriculumVitae', formData.curriculumVitae);

      const response = await addJobSeekerRequest(formDataToSend);
      if (response.error) {
        throw new Error(response.err.message);
      }

      alert('Solicitante de empleo registrado exitosamente.');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(`Error: ${err.response.data.message}`);
      } else {
        console.error('Error al registrar solicitante de empleo:', err);
        setError('Error al registrar solicitante de empleo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useRegisterJobSeeker;
