import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
   name:'todo',
   initialState:{
    user: {},
    artworks: [],
    artwork:{},
    loading: false,
    token:'',
    error:"", 
    success:"",
    orders:[]
   },
   reducers:{
      setToken(state, action){
         state.token = action.payload
      },
      getUserDetails(state, action){
         state.user = action.payload
      },
      getArtworks(state, action){
         // Use an immutable update to return a new state object
      return {
         ...state,
         artworks: action.payload,
       };
      },
      getSingleArtwork(state, action){
         // Use an immutable update to return a new state object
      state.artwork = action.payload
      },
      activateLoader(state){
         state.loading = true
      },
      stopLoader(state){
         state.loading = false
      },
      successHandler(state,action){
         state.loading=false
         state.success = action.payload
      },
      errorHandler(state,action){
         state.loading=false
         state.error = action.payload
      },
      getOrders(state, action){
         state.orders = action.payload
      }
   }
})

export const UserActions =  userSlice.actions

export default userSlice.reducer
