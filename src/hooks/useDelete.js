import React, {useEffect, useContext} from 'react'
import {delUser} from '../api/apiUser'; //missing
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useDelete() {
//get navigate
const {user, setUser} = useContext(AppContext)

    const del = async (cancelToken)=>{
        const response = await delUser(user.token, user.id ,cancelToken)
        console.log(response)
        if(response.user?.token){
            console.log('logged in');
            setUser({});
            // navigate to the home page
        }
        setError(response.error);
    }
    
    
    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (user.token)
            del(source.token)
            return ()=>{source.cancel()}
        },
        [user, setUser]
    )
    
}