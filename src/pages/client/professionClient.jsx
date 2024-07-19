import React, { useState, useEffect } from "react";
import {
  fetchProfessions,
  saveProfession,
  updateUserProfession,
} from "../../services/api";
import "./ProfessionClient.css"; // Archivo CSS para estilos

export const ProfessionClient = () => {
  const [professions, setProfessions] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [newProfession, setNewProfession] = useState({
    name: "",
    description: "",
  });
  const [user, setUser] = useState({
    id: "id_usuario",
    name: "nombre_usuario",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProfessions = async () => {
      try {
        const data = await fetchProfessions();
        setProfessions(data);
      } catch (error) {
        console.error("Error fetching professions:", error);
      }
    };

    getProfessions();
  }, []);

  const handleProfessionSelect = (profession) => {
    setSelectedProfession(profession);
  };

  const handleNewProfessionChange = (e) => {
    setNewProfession({ ...newProfession, [e.target.name]: e.target.value });
  };

  const handleNewProfessionSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await saveProfession({ ...newProfession, user: user.id });
      setMessage(
        `Profesión guardada exitosamente para el usuario ${user.name}`
      );
      setProfessions([...professions, data]);
      setNewProfession({ name: "", description: "" }); // Limpiar el formulario después de guardar
    } catch (error) {
      console.error("Error saving profession:", error);
    }
  };

  const handleAddProfessionToUser = async () => {
    try {
      const data = await updateUserProfession(user.id, selectedProfession._id);
      setMessage(
        `Profesión ${selectedProfession.name} agregada al usuario ${user.name}`
      );
    } catch (error) {
      console.error("Error adding profession to user:", error);
    }
  };

  return (
    <div className="profession-client">
      <h1>Profesión</h1>

      <div className="profession-list">
        <h2>Lista de profesiones</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {professions.map((profession) => (
              <tr key={profession._id}>
                <td>{profession.name}</td>
                <td>{profession.description}</td>
                <td>
                  <button onClick={() => handleProfessionSelect(profession)}>
                    Seleccionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-profession">
        <h2>Agregar nueva profesión</h2>
        <form onSubmit={handleNewProfessionSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={newProfession.name}
              onChange={handleNewProfessionChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <input
              type="text"
              name="description"
              value={newProfession.description}
              onChange={handleNewProfessionChange}
              required
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      {selectedProfession && (
        <div className="selected-profession">
          <h2>Profesión seleccionada</h2>
          <p>{selectedProfession.name}</p>
          <button onClick={handleAddProfessionToUser}>
            Agregar profesión al usuario
          </button>
        </div>
      )}

      {message && <div className="message">{message}</div>}
    </div>
  );
};
