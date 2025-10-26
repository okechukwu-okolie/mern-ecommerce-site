import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
}



const authSlice = createSlice({
    name:'auth',
    initialState, 
    reducers: {
        setUser:(state,action)=> {
            // state.user = action.payload; // Update the 'user' state with the payload
            // state.isAuthenticated = true; // Set isAuthenticated to true since a user is present
            // state.isLoading = false;
    }  
}
})

export const {setUser} = authSlice.actions
export default authSlice.reducer