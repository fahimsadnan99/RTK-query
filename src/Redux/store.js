import { configureStore } from '@reduxjs/toolkit'
import {StudentsApi} from "./RtkQuery/AllStudents"




const store = configureStore({
  reducer: {
          [StudentsApi.reducerPath] : StudentsApi.reducer
  },

  middleware :(gdm)=> 
   gdm().concat(StudentsApi.middleware),
  
})

export default store