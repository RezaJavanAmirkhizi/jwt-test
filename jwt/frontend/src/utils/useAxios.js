import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import {useEffect, useState} from 'react'


const baseURL = 'http://localhost:8000'


const useAxios = (authTokens, setUser, setAuthTokens) => {


    useEffect(() => { localStorage.setItem('authTokens', JSON.stringify(authTokens)); }, [authTokens]);

    const axiosInstance = axios.create({
        baseURL,
        headers:{Authorization: `Bearer ${authTokens?.access}`}
    });


    axiosInstance.interceptors.request.use(async req => {
    
        const user = jwt_decode(authTokens.access)

        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1.5;
    
        if(!isExpired) return req
    
        await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        })
        .then(function(response) {
            setAuthTokens({...authTokens, access : response.data.access });
            setUser(jwt_decode(response.data.access));
            req.headers.Authorization = `Bearer ${response.data.access}`

        })
        .catch(function (error){
            console.log(error)
        });
    
       return req
    })
    
    return axiosInstance
}

export default useAxios;