import { useEffect, useState } from 'react';

export const useDetail = (detail, apiFunc) => {
    const [ info, setInfo ] = useState(null);
    const [ showLoader, setShowLoader ] = useState(false);
    const { category, url } = detail;

    useEffect(() => {
        let mounted = true;

        const request = async () => {
            if (mounted) setShowLoader(true)
            let name = category || url;
            
            try {
                const { data } = await apiFunc(name);
    
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

    return () => mounted = false;
    }, [ ]);

    return { info, showLoader };
};

