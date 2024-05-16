import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:"userSlice",
    initialState:{
        value:{
            first_name: undefined,
            last_name: undefined,
            phone: undefined,
            email: undefined,
            password: undefined,
            user_role: undefined,
            location_id: undefined,
            islogin:false
        }
    },
    reducers:{
        storeUserInfo(state,action)
    {
      var data=action.payload;
      console.log("inside Data : "+data);
      state.value=data
    }   
 }
})
export const{storeUserInfo}=slice.actions;
export default  slice.reducer;