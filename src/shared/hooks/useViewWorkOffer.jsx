import { useState, useEffect } from "react";
import { getAllWorkOffers, applyForWorkOffer } from "../../services/api";
import toast from "react-hot-toast";

export const useViewWorkOffers = (userId) => {
    const [workOffers, setWorkOffers] = useState([]);
    const [filteredWorkOffers, setFilteredWorkOffers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterProfession, setFilterProfession] = useState("");

    useEffect(() => {
        const fetchWorkOffers = async () => {
            setIsFetching(true);
            const result = await getAllWorkOffers();
            if (result.error) {
                toast.error(result.e?.response?.data || 'Error when listing job offers.');
                setIsFetching(false);
                return;
            }
            setWorkOffers(result);
            setFilteredWorkOffers(result);
            setIsFetching(false);
        };

        fetchWorkOffers();
    }, []);

    useEffect(() => {
        let filtered = workOffers;

        if (searchTerm) {
            filtered = filtered.filter(offer =>
                offer.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterProfession) {
            filtered = filtered.filter(offer => offer.professional === filterProfession);
        }

        setFilteredWorkOffers(filtered);
    }, [searchTerm, filterProfession, workOffers]);

    const applyForOffer = async (workOfferId) => {
        const result = await applyForWorkOffer(userId, workOfferId);
        if (result.error) {
            toast.error(result.e?.response?.data || 'Error when applying for job offer.');
        } else {
            toast.success('Applied successfully');
            setWorkOffers(prevOffers =>
                prevOffers.map(offer =>
                    offer._id === workOfferId
                        ? { ...offer, applicants: [...offer.applicants, userId] }
                        : offer
                )
            );
        }
    };

    return {
        workOffers: filteredWorkOffers,
        isFetching,
        searchTerm,
        setSearchTerm,
        filterProfession,
        setFilterProfession,
        applyForOffer
    };
};
