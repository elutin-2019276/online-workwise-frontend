import React, { useEffect, useState } from "react";
import { useGetWorkOffersByUserId } from "../../shared/hooks/useGetWorkOffersByUserId";
import { useToken } from "../../shared/hooks/useToken";
import './workOfferA.css';

const professions = [
    { value: "", label: "Selecciona una profesión" },
    { value: "Maestro", label: "Maestro" },
    { value: "Programador", label: "Programador" },
    { value: "Arquitecto", label: "Arquitecto" },
    { value: "Plomero", label: "Plomero" },
    { value: "Mecánico", label: "Mecánico" }
];

export const MyWorkOffer = () => {
    const { uid, name } = useToken();
    const { getWorkOffers, allWorkOffers, isFetching, updateWorkOffer, deleteWorkOffer } = useGetWorkOffersByUserId();
    const [editingOffer, setEditingOffer] = useState(null);
    const [editData, setEditData] = useState({ title: "", problemDescription: "", professional: "", status: "" });

    useEffect(() => {
        if (uid) {
            getWorkOffers(uid);
        }
    }, [uid, getWorkOffers]);

    const handleEdit = (offer) => {
        setEditingOffer(offer._id);
        setEditData({ title: offer.title, problemDescription: offer.problemDescription, professional: offer.professional});
    };

    const handleDelete = (offerId) => {
        deleteWorkOffer(offerId);
    };

    const handleSave = () => {
        updateWorkOffer(editingOffer, editData);
        setEditingOffer(null);
    };

    const handleCancel = () => {
        setEditingOffer(null);
    };

    if (isFetching) return <div>Loading...</div>;

    return (
        <div className="work-offers-container">
            <h1>Mis Ofertas de Trabajo</h1>
            <h2>Ofertas de Trabajo del Usuario - {name}</h2>
            {allWorkOffers.length === 0 ? (
                <p>No tienes ofertas de trabajo.</p>
            ) : (
                <ul>
                    {Array.isArray(allWorkOffers) && allWorkOffers.map((offer) => (
                        <li key={offer._id}>
                            {editingOffer === offer._id ? (
                                <div className="edit-container">
                                    <label>Title :</label>
                                    <input
                                        type="text"
                                        value={editData.title}
                                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                        placeholder="Título"
                                    />
                                    <label>Descripción :</label>
                                    <textarea
                                        value={editData.problemDescription}
                                        onChange={(e) => setEditData({ ...editData, problemDescription: e.target.value })}
                                        placeholder="Descripción del problema"
                                    />
                                    <label>Profeción :</label>
                                    <select
                                        value={editData.professional}
                                        onChange={(e) => setEditData({ ...editData, professional: e.target.value })}
                                    >
                                        {professions.map((profession) => (
                                            <option key={profession.value} value={profession.value}>
                                                {profession.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="edit-buttons">
                                        <button className="edit-button" onClick={handleSave}>Guardar</button>
                                        <button className="edit-button__del" onClick={handleCancel}>Cancelar</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2>{offer.title}</h2>
                                    <strong>Descripción :</strong>
                                    <p>{offer.problemDescription}</p>
                                    <strong>Profesión:</strong> 
                                    <p>{offer.professional}</p>
                                    <button className="edit-button" onClick={() => handleEdit(offer)}>Editar</button>
                                    <button className="edit-button__del" onClick={() => handleDelete(offer._id)}>Eliminar</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
