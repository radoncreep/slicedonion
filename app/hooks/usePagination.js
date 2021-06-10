import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEpisodesFromShow, removeEpisodesFromShow } from '../store/actions';

export const usePagination = (detail, epiFunc) => {
    const [ episodes, setEpisodes ] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    let [ pagequery, setPageQuery ] = useState(0);
    const dispatch = useDispatch();

    const { category, url } = detail;
    
    
    useEffect(() => {
        let mounted = true;

        const getEpisodeList = async () => {
            dispatch(removeEpisodesFromShow());

            if (mounted) {
                setShowSpinner(true)
            }
            let name = category || url;
    
            const { data, ok } = await epiFunc(name, pagequery);
    
            if (ok && mounted) {
                setShowSpinner(false);

                let temp = episodes;
                setEpisodes(temp.concat(data.totalEpisodes));
                await dispatch(addEpisodesFromShow(data.totalEpisodes));
            }
            return data;
        };

        getEpisodeList();

        return () => {
            setEpisodes([]);
            mounted = false;
            dispatch(removeEpisodesFromShow());
        }
    }, []);

    return { pagequery, episodes, showSpinner };
};