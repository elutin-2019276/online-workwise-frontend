import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getWorkOffers as getWorkOffersRequest, getWorkOfferById as getWorkOfferByUserIdRequest, updateWorkOffer as updateWorkOfferRequest, deleteWorkOffer as deleteWorkOfferRequest } from "../../services/api";

export const useGetWorkOffersByUserId = () => {
    const [workOffers, setWorkOffers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getWorkOffers = useCallback(async (userId = null) => {
        setIsFetching(true);

        if (userId) {
            const workOffersByUserIdData = await getWorkOfferByUserIdRequest(userId);
            if (workOffersByUserIdData.error) {
                toast.error(
                    workOffersByUserIdData.e?.response?.data || 'Error occurred when reading user work offers'
                );
                setIsFetching(false);
                return;
            }
            setWorkOffers(workOffersByUserIdData);
        } else {
            const workOffersData = await getWorkOffersRequest();
            if (workOffersData.error) {
                toast.error(
                    workOffersData.e?.response?.data || 'Error occurred when reading work offers'
                );
                setIsFetching(false);
                return;
            }
            setWorkOffers(workOffersData.data);
        }

        setIsFetching(false);
    }, []);

    const updateWorkOffer = useCallback(async (id, data) => {
        const result = await updateWorkOfferRequest(id, data);
        if (result.error) {
            toast.error(
                result.e?.response?.data || 'Error occurred when updating work offer'
            );
        } else {
            toast.success('Work offer updated successfully');
        }
    }, [getWorkOffers]);

    const deleteWorkOffer = useCallback(async (id) => {
        const result = await deleteWorkOfferRequest(id);
        if (result.error) {
            toast.error(
                result.e?.response?.data || 'Error occurred when deleting work offer'
            );
        } else {
            toast.success('Work offer deleted successfully');
        }
    }, [getWorkOffers]);

    return {
        getWorkOffers,
        isFetching,
        allWorkOffers: workOffers,
        updateWorkOffer,
        deleteWorkOffer
    };
};
