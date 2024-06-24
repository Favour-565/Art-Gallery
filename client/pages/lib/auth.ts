import { Dispatch } from "react";
import { UserActions } from "../store/user";
import { fetchPOST, fetchPUT } from "./api"
import { useRouter } from 'next/router';

export const Register = async(formData:any) => {
    try{
        const response = await fetchPOST('/users/register',formData)
        console.log(response)
    }catch(error){
        throw new Error('Error Registering')
    }
}


export const Loggin = async(formData:any) => {
    try{
      
        const response = await fetchPOST('/users/login', formData)
       
        return response.data.token
    }catch(error){
        console.log('err',error)
        return error
    }
}

export const Login = async(formData:any, dispatch:any) => {
    try{
        dispatch(UserActions.activateLoader())
        const response = await fetchPOST('/users/login', formData)
        if(response.data.error){
            dispatch(UserActions.errorHandler(response.data.error))
            setTimeout(()=> {
                dispatch(UserActions.errorHandler(""))
            }, 2000)
        }else{
            dispatch(UserActions.setToken(response.data.token))
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userId", response.data.user.id)
            window.location.href='/dashboard'
            dispatch(UserActions.stopLoader())
        }
    }catch(error){
        console.log('err',error)
        return error
    }
}

export const UpdateProfile = async(formData:any, dispatch:any) => {
    try{
        dispatch(UserActions.activateLoader())
        const response = await fetchPUT('/users/update-profile', formData)
        if(response.data.error){
            dispatch(UserActions.errorHandler(response.data.error))
            setTimeout(()=> {
                dispatch(UserActions.errorHandler(""))
            }, 2000)
        }
            dispatch(UserActions.successHandler(response.data.message))
            setTimeout(()=> {
                dispatch(UserActions.successHandler(""))
            }, 2000)
           
        
    }catch(error){
        console.log(error)
    }
}

export const Logout = async() =>{
    try{
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        localStorage.removeItem('userId')
    }catch(error){
        throw new Error('Error Logging Off')
    }
}