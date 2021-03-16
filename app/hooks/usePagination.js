import React, {useEffect, useReducer, useState } from 'react';

export const usePagination = (detail, epiFunc) => {
    const [ episodes, setEpisodes ] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    let [ pagequery, setPageQuery ] = useState(0);
    const { category, url } = detail;
    
    useEffect(() => {
        let mounted = true;

        const getEpisodeList = async () => {
            console.log(mounted)
            if (mounted) {
                setShowSpinner(true)
            }
            let name = category || url;
    
            const { data } = await epiFunc(name, pagequery);
    
            if (mounted) {
                console.log('responded')
                setShowSpinner(false);

                let temp = episodes;
                setEpisodes(temp.concat(data.totalEpisodes));
            }
            return data;
        };

        getEpisodeList();

        return () => mounted = false;
    }, [])

    return { pagequery, episodes, showSpinner };
};