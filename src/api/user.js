// import apiClientNoAuth from './clientNoAuth';
// import apiClientTokenAuth from './clientTokenAuth';
// import axios from "axios";


// export const createUser= async  ()=>{
//     const body = {
//         "email" : "mar@mat.com",
//         "first_name" : "mar",
//         "last_name" : "mat",
//         "password" : "123"
//     }
//     const response = await axios.post("https://cae-bootstore.herokuapp.com/user",body)
//     return response
// }


import apiClient from './clientNoAuth';

const endpoint = '/user';

export const postUser= async (data, cancelToken)=>{
    let error;
    let user;

    const response = await apiClient(cancelToken).post(endpoint, data);
    if (response.ok){
        user = response.data
    }else if (response.status === 422){
        error="This email has already been created"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        user
    }

}