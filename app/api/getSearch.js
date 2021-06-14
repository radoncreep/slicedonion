import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.43.211:3300'
})

export const getSearch = async (query, page=1) => {
    return instance.get(`/search-shows-data/${query}/${page}`);
};