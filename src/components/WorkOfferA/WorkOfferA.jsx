import React, { useState } from "react";
import { useToken } from "../../shared/hooks/useToken";
import { usePostWorkOffer } from "../../shared/hooks/useWorkOffer";
import "./workOfferA.css";

export const WorkOfferA = () => {
  const { name,uid } = useToken();
  const { postWorkOffer, isLoading } = usePostWorkOffer();

  const [formData, setFormData] = useState({
    title: "",
    problemDescription: "",
    user: uid,
    professional: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    problemDescription: false,
    professional: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: !value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      title: !formData.title.trim(),
      problemDescription: !formData.problemDescription.trim(),
      professional: !formData.professional.trim(),
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).some((error) => error);

    if (isValid) {
      await postWorkOffer({
        title: formData.title,
        problemDescription: formData.problemDescription,
        user: formData.user,
        professional: formData.professional,
      });

      // Reset form data after successful submission
      setFormData({
        title: "",
        problemDescription: "",
        user: uid,
        professional: "",
      });
    }
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formData.title.trim() ||
    !formData.problemDescription.trim() ||
    !formData.professional.trim();

  return (
    <div className="form-backgraund-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            {errors.title && (
              <span className="mensaje-error">Este campo es obligatorio</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="problemDescription">Description:</label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              required
            />
            {errors.problemDescription && (
              <span className="mensaje-error">Este campo es obligatorio</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="user">User - {name}</label>
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user || uid}
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="professional">Profesión:</label>
            <select
              id="professional"
              name="professional"
              value={formData.professional}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una profesión</option>
              <option value="Maestro">Maestro</option>
              <option value="Programador">Programador</option>
              <option value="Arquitecto">Arquitecto</option>
              <option value="Plomero">Plomero</option>
              <option value="Mecánico">Mecánico</option>
            </select>
            {errors.professional && (
              <span className="mensaje-error">Este campo es obligatorio</span>
            )}
          </div>
          <button type="submit" disabled={isSubmitButtonDisabled}>
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};
