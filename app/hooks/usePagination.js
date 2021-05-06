import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEpisodesFromShow } from '../store/actions';

export const usePagination = (detail, epiFunc) => {
    const [ episodes, setEpisodes ] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    let [ pagequery, setPageQuery ] = useState(0);

    let dispatch = useDispatch();

    const { category, url } = detail;
    
    useEffect(() => {
        let mounted = true;

        const getEpisodeList = async () => {
            console.log(mounted)
            if (mounted) {
                setShowSpinner(true)
            }
            let name = category || url;
    
            const { data, ok } = await epiFunc(name, pagequery);
    
            if (ok && mounted) {
                console.log('responded')
                setShowSpinner(false);

                let temp = episodes;
                setEpisodes(temp.concat(data.totalEpisodes));
                dispatch(addEpisodesFromShow(data.totalEpisodes));
            }
            return data;
        };

        getEpisodeList();

        return () => mounted = false;
    }, []);

    return { pagequery, episodes, showSpinner };
};