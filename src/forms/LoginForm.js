import React, {useContext, useState, useEffect} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import {getUser} from '../api/apiBasicAuth';
import {CancelToken} from 'apisauce';
import { AppContext } from '../context/AppContext';
import useLogin from '../hooks/useLogin';
import Error from '../components/Error';



//Defining our yup validation
const FormSchema=Yup.object(
    {
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required()
    }
)
const initialValues={
    email:'',
    password:''
}
export default function LoginForm(){
    const {setUser} = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({});
    const [error, setError] = useState('')
    
    useLogin(loginCreds, setLoginCreds, setError, setUser)

    const handleSubmit=(values)=>{
        console.log(values)
        setLoginCreds(values)
    }
    


    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="email"
                name="email"
                fullWidth
                sx={{mb:2, mt:2}}
                label="email"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}            
            />

            <TextField
                id="password"
                name="password"
                type="password"
                fullWidth
                sx={{mb:2}}
                label="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}            
            />

            <Button type="submit" sx={{width:"100%"}}>Login</Button>
        </form>
    )

}

// import React, {useContext, useState, useEffect} from 'react';
// import * as Yup from "yup";
// import { useFormik } from 'formik';
// import Button from '../components/Button';
// import TextField from '@mui/material/TextField';
// import {getUser} from '../api/apiBasicAuth';
// import {putUser} from '../api/apiUser';
// import {delUser} from '../api/apiUser';
// import {postUser} from '../api/apiUser';
// import {CancelToken} from 'apisauce';
// import { AppContext } from '../context/AppContext';
// import useLogin from '../hooks/useLogin';
// import useRegister from '../hooks/useRegister';
// import useEdit from '../hooks/useEdit';
// import useDelete from '../hooks/useDelete';


// //Defining our yup validation
// const FormSchema=Yup.object(
//     {
//         email:Yup.string().email("Must be a valid e-mail format").required(),
//         password:Yup.string().required()
//     }
// )

// export default function LoginForm(user){
//     const {setUser} = useContext(AppContext);
//     const [loginCreds, setLoginCreds] = useState({});
//     const [error, setError] = useState('')
//     const [newUser, setNewUser] = useState('')
//     const [editUser, setEditUser] = useState('')
//     const [deleteUser, setDeleteUser] = useState('')

    
//     useLogin(loginCreds, setLoginCreds, setError, setUser)
//     useRegister(newUser)
//     useEdit(editUser)
//     useDelete(deleteUser)

//     const initialValues={
//         email:'',
//         password:'',
//         confirm_password:''
//     }

//     const handleSubmit=(values, resetForm)=>{
//         if (user){
//             setEditUser(values)
//         }else{
//             setNewUser(values)
//         }
//         console.log(values)
//         resetForm(initialValues)
//     }
//     const handleDelete=()=>{
//         setDeleteUser(user?.id)
//     }


//     const formik = useFormik({
//         initialValues:initialValues,
//         validationSchema:FormSchema,
//         onSubmit:(values)=>{handleSubmit(values)}
//     })

//     return(
//         <form onSubmit={formik.handleSubmit}>
//             <TextField
//                 id="email"
//                 name="email"
//                 fullWidth
//                 sx={{mb:2, mt:2}}
//                 label="email"
//                 placeholder="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}            
//             />

//             <TextField
//                 id="password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 sx={{mb:2}}
//                 label="password"
//                 placeholder="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 error={formik.touched.password && Boolean(formik.errors.password)}
//                 helperText={formik.touched.password && formik.errors.password}            
//             />

//             <TextField
//                 id="confirm_password"
//                 name="confirm_password"
//                 type="password"
//                 fullWidth
//                 sx={{mb:2}}
//                 label="confirm_password"
//                 placeholder="confirm_password"
//                 value={formik.values.confirm_password}
//                 onChange={formik.handleChange}
//                 error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
//                 helperText={formik.touched.confirm_password && formik.errors.confirm_password}            
//             />

//             <Button type="submit" onClick={()=>handleSubmit()} sx={{width:"100%"}}>Login</Button>
//             <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button>
//             <Button type="submit" sx={{width:"100%"}}>Edit</Button>
//             <Button color="error" type="submit" sx={{width:"100%"}}>Register</Button>

//         </form>
//     )

// }

