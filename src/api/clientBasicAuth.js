import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (email, password, cancelToken) =>create({
    baseURL:  window.location.host ==='127.0.0.1'||'localhost' ? "https://cae-bootstore.herokuapp.com/user":'',
        headers:{
        Authorization:"Basic "+base64.encode(email+":"+password)
    },
    cancelToken
})

export default apiClient