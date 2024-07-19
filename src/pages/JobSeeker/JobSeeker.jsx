import React from 'react';
import useRegisterJobSeeker from '../../shared/hooks/useJobSeeker';

const RegisterJobSeeker = () => {
  const {
    formData,
    loading,
    error,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useRegisterJobSeeker();

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Registro de Solicitante de Empleo</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              style={styles.input}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="description"
              placeholder="Descripción"
              value={formData.description}
              style={styles.input}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="file"
              name="curriculumVitae"
              style={{ ...styles.input, ...styles.fileInput }}
              onChange={handleFileChange}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Estilos CSS-in-JS
const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#7792a5',
  },
  container: {
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#c5d1d7',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#0f395a',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
  },
  fileInput: {
    border: 'none',
    padding: '0',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#0f395a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default RegisterJobSeeker;
