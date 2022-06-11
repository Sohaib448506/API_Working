import apiClient from './clientNoAuth';

const endpoint = '/api/book/<int:id>';

export const getOneBook= async (data, cancelToken)=>{
    let error;
    let book;

    const response = await apiClient(data, cancelToken).get(endpoint);
    if (response.ok){
        book = response.data
    }else if (response.status === 401){
        error="Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        book
    }

}
export default {
    getOneBook
}