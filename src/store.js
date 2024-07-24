import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./Slice/forecastSlice";

export default configureStore({
    reducer:{
        forecast: forecastReducer
    }
})