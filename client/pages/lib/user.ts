import { UserActions } from "../store/user"
import { fetchGET, fetchPOST, fetchPUT } from "./api"
import {Dispatch} from "react"

const BASE_URL = `${process.env.NEXT_PUBLIC_API_END_POINT}`;

export const getUserDetails = async(dispatch:Dispatch<any>) => {
    try{
        const response = await fetchGET(`/users/user-details`)
        dispatch(UserActions.getUserDetails(response.data.user))
        
    }catch(error){
        console.log(error)
    }
}


export const getArtworks = async( category:string) => {
    try{
        const response = category.length >1 ?  await fetch(`${BASE_URL}/users/artworks?category=${category}`) :  await fetch(`${BASE_URL}/users/artworks`) 

        const data = await response.json()
     
        return data.artWorks
        
    }catch(error){
        console.log(error)
    }
}

export const getSingleArtwork = async( artId:string) => {
    try{
       
        const response = await fetch(`${BASE_URL}/users/artworks/${artId}`)

        const data = await response.json()
     
        return data.artWorks

        
    }catch(error){
       console.log(error)
    }
}

export const payForArtwork = async(artId:string) => {
    const response =  await fetchPOST(`/users/payment/${artId}`)

    window.location.href= response.data.checkoutUrl
 }

export const verifyArtwork = async(userId:string, reference:string) => {
    try{
        const response = await fetchGET(`/auction/verify?userId=${userId}&reference=${reference}`)
    console.log(response)
    }catch(error){
        console.log(error)
    }
    
}

export const uploadImage = async(formData:any) => {
    try{
        const response = await fetchPUT(`/users/image`, formData)
    console.log(response)
    }catch(error){
        console.log(error)
    }
}


export const getOrders = async() => {
    try{
        const response = await fetchGET('/orders')

        return response.data
        
    }catch(error){
        console.log(error)
    }
}

