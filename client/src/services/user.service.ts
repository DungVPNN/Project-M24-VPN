import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

// hàm lấy thông tin user
export const getAllUserAPI: any =
    async () => {
        const res: any = await axios.get("http://localhost:8080/users");
        return res.data;
    }


// hàm thêm thông tin user
export const addUserAPI = async (user: any) => {
    const response: any = await axios.post(
        "http://localhost:8080/users",
        user
    );
    return response.data;
}

// hàm cập nhật user
export const updateUserAPI = async (item: any) => {
    const response: any = await axios.put(
        `http://localhost:8080/users/${item.id}`,
        item
    );
    return response.data;
}