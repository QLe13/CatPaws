import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

const API_URL = 'http://localhost:4500';

export function useQuery(js) {
    let [get, _] = useState(axios.get(`${API_URL}/eval`, '\"' + js + '\"'));
    return get;
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
