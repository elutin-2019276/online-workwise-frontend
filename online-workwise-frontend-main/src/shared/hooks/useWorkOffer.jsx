import { useState } from "react";
import { workOffertPost as postWorkOfferRequest } from "../../services/api";
import toast from "react-hot-toast";

export const usePostWorkOffer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const postWorkOffer = async (formData) => {
        setIsLoading(true);

        const response = await postWorkOfferRequest(formData);

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.error?.response?.data || 'Error al publicar la oferta de trabajo'
            );
        }

        toast.success("Oferta de trabajo publicada exitosamente");
    };

    return {
        postWorkOffer,
        isLoading
    };
};
