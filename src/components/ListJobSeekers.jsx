import React from 'react';
import useListJobSeekers from '../shared/useListJobSeeker.jsx'
import { deleteJobSeekerRequest } from '../services/api.js';

const ListJobSeekers = () => {
    const { jobSeekers, loading, error, reloadJobSeekers } = useListJobSeekers();
  
    const handleDelete = async (jobSeekerId) => {
      const response = await deleteJobSeekerRequest(jobSeekerId);
      if (!response.error) {
        reloadJobSeekers(); // Refresca la lista de solicitantes de empleo
      } else {
        console.error('Error al eliminar el solicitante de empleo:', response.err);
      }
    };
  
    return (
      <div style={styles.outerContainer}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Lista de Solicitantes de Empleo</h2>
          {loading && <p>Cargando...</p>}
          {error && <p style={styles.error}>{error}</p>}
          {jobSeekers.length === 0 && !loading && <p style={styles.noData}>No hay solicitantes de empleo registrados.</p>}
          {jobSeekers.length > 0 && (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Nombre</th>
                  <th style={styles.th}>Descripción</th>
                  <th style={styles.th}>Currículum</th>
                  <th style={styles.th}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {jobSeekers.map((jobSeeker) => (
                  <tr key={jobSeeker._id}>
                    <td style={styles.td}>{jobSeeker.name}</td>
                    <td style={styles.td}>{jobSeeker.description}</td>
                    <td style={styles.td}>
                      <a href={`http://localhost:2880/getImage/${jobSeeker.curriculumVitae}`} target="_blank" rel="noopener noreferrer">
                        Ver Currículum
                      </a>
                    </td>
                    <td style={styles.td}>
                      <button style={styles.deleteButton} onClick={() => handleDelete(jobSeeker._id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
      maxWidth: '800px',
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
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      borderBottom: '2px solid #ccc',
      padding: '10px',
      textAlign: 'left',
      color: '#0f395a',
    },
    td: {
      borderBottom: '1px solid #ccc',
      padding: '10px',
      color: '#0f395a',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      textAlign: 'center',
    },
    deleteButton: {
      padding: '5px 10px',
      fontSize: '14px',
      cursor: 'pointer',
      backgroundColor: '#ff4c4c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
    },
    noData: {
      textAlign: 'center',
      color: '#0f395a',
      marginTop: '20px',
    },
  };
  
  export default ListJobSeekers;
