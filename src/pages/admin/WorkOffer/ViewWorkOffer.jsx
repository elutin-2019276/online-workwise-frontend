import React from "react";
import { useViewWorkOffers } from "../../shared/hooks/useViewWorkOffer";
import './viewWorkOffer.css';

const professions = [
    { value: "", label: "Todas las profesiones" },
    { value: "Maestro", label: "Maestro" },
    { value: "Programador", label: "Programador" },
    { value: "Arquitecto", label: "Arquitecto" },
    { value: "Plomero", label: "Plomero" },
    { value: "Mecánico", label: "Mecánico" }
];

export const ViewWorkOffer = () => {
    const {
        workOffers,
        isFetching,
        searchTerm,
        setSearchTerm,
        filterProfession,
        setFilterProfession
    } = useViewWorkOffers();

    if (isFetching) return <div>Loading...</div>;

    return (
        <div className="work-offers-container">
            <h1>Ofertas de Trabajo</h1>
            <div className="search-filter-container">
                <input
                    type="text"
                    placeholder="Buscar por título"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select
                    value={filterProfession}
                    onChange={(e) => setFilterProfession(e.target.value)}
                    className="filter-select"
                >
                    {professions.map((profession) => (
                        <option key={profession.value} value={profession.value}>
                            {profession.label}
                        </option>
                    ))}
                </select>
            </div>
            {workOffers.length === 0 ? (
                <p>No hay ofertas de trabajo disponibles.</p>
            ) : (
                <ul>
                    {workOffers.map((offer) => (
                        <li key={offer._id} className="work-offer-card">
                            <h2>{offer.title}</h2>
                            <p>{offer.problemDescription}</p>
                            <p><strong>Profesión:</strong> {offer.professional}</p>
                            <p><strong>Status:</strong> {offer.status}</p>
                            <button className="apply-button">Solicitar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
