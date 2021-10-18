import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/dashboard/reducer'

export default configureStore({  
  reducer: {
    dashboard: dashboardReducer,
  },
})