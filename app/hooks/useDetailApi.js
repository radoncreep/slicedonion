import React, { useEffect, useState } from 'react';

export const useDetail = (detail, apiFunc) => {
    const [ info, setInfo ] = useState();
    const [ showLoader, setShowLoader ] = useState(false);
    const { category } = detail;

    useEffect(() => {
        let mounted = true;

        const request = async () => {
            if (mounted) setShowLoader(true)
            let name = category;
            try {
                const { data } = await apiFunc(name);
    
                console.log(mounted);
                if (mounted) {
                    setShowLoader(false);
                    setInfo(data.animeDetail);
                };

                return data;
            } catch (error) {    
                console.log(error);
            };
        };

        request();

        return () => {
            console.log('cleanup')
            return mounted = false;
        }
    }, [ ]);

    return { info, showLoader };
};

