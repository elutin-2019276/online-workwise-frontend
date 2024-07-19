import React, { useState } from 'react';
import { saveEmployer } from '../../services/api'; // Asegúrate de ajustar el path según tu estructura de proyecto
import "./EmployerClient.css"

export const EmployerClient = () => {
  const [companyName, setCompanyName] = useState('');
  const [descriptionCompany, setDescriptionCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveEmployer({
        companyName,
        descriptionCompany,
        phone,
      });
      console.log(response);
      // Lógica adicional en caso de éxito, por ejemplo, redirección, mostrar mensaje, etc.
    } catch (error) {
      console.error('Error saving employer:', error);
      setError('Error saving employer. Please try again.'); // Mensaje de error para mostrar al usuario
    }
  };

  return (
    <div className="employer-client-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Employer</h2>
        <div>
          <label>Company Name:</label>
          <input 
            type="text" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            value={descriptionCompany} 
            onChange={(e) => setDescriptionCompany(e.target.value)} 
          />
        </div>
        <div>
          <label>Phone:</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Save Employer</button>
      </form>
    </div>
  );
};
