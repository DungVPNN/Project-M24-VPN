import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import categoryReducer from "./reducer/categoryReducer";
import userReducer from "./reducer/userReducer";

const store = configureStore({
    reducer:{
        productReducer,
        categoryReducer,
        userReducer
    }
})
export default store