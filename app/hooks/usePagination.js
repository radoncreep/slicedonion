import React, { useReducer, useState } from 'react';

export const usePagination = (epiFunc) => {
    const [ episodes, setEpisodes ] = useState([]);
    const [ disableNext, setDisableNext ] = useState(false);
    const [ queryNumber, setQueryNumber ] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    
    const updatePageQuery = (state, action) => {
        switch (action.type) {
            case 'ADD':
                if (queryNumber.length > 0 && state < queryNumber.length) {
                    state = state + action.payload
                    return state;
                } else if (queryNumber.length > 0 && state >= queryNumber.length) {
                    return setDisableNext(true)
                };
            case 'RETAIN':
                return state = action.payload;     
            default:
                break;
        };
    };
   
    const [ pagequery, dispatch ] = useReducer(updatePageQuery, 0);
    
    const getEpisodeList = async (detail, mounted) => {
        console.log('mounted ', mounted);
        if (mounted) {
            setShowSpinner(true)
            dispatch({ type: 'ADD', payload: 1 })
            setDisableNext(true)
        }
        let name = detail.category;

        const { data, ok } = await epiFunc(name, pagequery);

        if (!ok && mounted) return dispatch({ type: 'RETAIN', payload: pagequery });
        
        if (mounted) {
            setShowSpinner(false)
            console.log('responded')
            let temp = episodes;
            setEpisodes(temp.concat(data.totalEpisodes));
            setQueryNumber(data.milestoneEpisodes);
            pagequery + 1 < data.milestoneEpisodes.length ? setDisableNext(false) : setDisableNext(true)
        }
    };

    return { pagequery, episodes, disableNext, getEpisodeList, showSpinner };
};