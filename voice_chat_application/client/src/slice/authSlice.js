import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isAuth: false,
     isVerified: null,
     phone: '',
     hash: '',
     otp: ''
}

export const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          setOtp: (state, actions) => {
               state.hash = actions.payload.hash;
               state.otp = actions.payload.otp;
          },
          verifyOtp: (state, actions) => {

          }
     },
})

export const { setOtp, verifyOtp } = authSlice.actions

export default authSlice.reducer