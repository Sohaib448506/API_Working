import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'
import apiClient from './clientBasicAuth';

const endpoint= '/api/user'



// const post = async (data, cancelToken) => {
//     const response = await apiClientNoAuth(cancelToken).post(endpoint, data)
//     return response.ok
// }

// const put = async (token, id, data, cancelToken)=>{
//     const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, data)
//     return response.ok
// }

// const del = async(token, id, cancelToken)=>{
//     const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id)
//     return response.ok
// }

// export default {
//     // get,
//     post,
//     put,
//     del
// }

export const postUser = async (data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientNoAuth(data, cancelToken).post(endpoint, data);

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
let token= "BFGYQt6rczpS6bfsqu1GFVZw1aDZzwN4pe2bEXYzyfE"
export const putUser = async (token, id, data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, id, data, cancelToken).put(endpoint+'/'+id, data);

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
export const delUser = async (token, id, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, id, cancelToken).del(endpoint+'/'+id);

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
