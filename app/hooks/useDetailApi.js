import React, { useState } from 'react';

export const useDetail = (apiFunc) => {
    const [ info, setInfo ] = useState();
    const [ showLoader, setShowLoader ] = useState(false);

    const request = async (detail, mounted) => {
        if (mounted) setShowLoader(true)
        let name = detail.category;
        try {
            const { data } = await apiFunc(name);

            if (mounted) {
                setInfo(data.animeDetail);
                setShowLoader(false);
            };
        } catch (error) {    
            console.log(error);
        };

        return info;
    };

    return { info, request, showLoader };
};