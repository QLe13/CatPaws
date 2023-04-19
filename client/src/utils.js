import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

const API_URL = 'http://localhost:4500';

export function useQuery(js) {
    let [get, _] = useState(axios.get(`${API_URL}/eval`, '\"' + js + '\"'));
    return get;
    //what does useQuery function do? It allows us to run javascript code on the server from the frontend. This is a security risk, so we should only use it for development purposes.
}

export function useMutation(js) {
    let [post, _] = useState(axios.post(`${API_URL}/eval`, '\"' + js + '\"'));
    return post;
}

export function fetchQuery(js) {
    return axios.get(`${API_URL}/eval`, '\"' + js + '\"');
}

export function fetchMutation(js) {
    return axios.post(`${API_URL}/eval`, '\"' + js + '\"');
}
