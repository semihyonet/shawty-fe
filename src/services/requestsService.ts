import axiosClient from "@/services/axiosInstance";
import {AxiosRequestConfig, Method} from "axios";


const makeRequest = async <T, >(url: string, method: Method, data: any) => {
    try {
        const client = await axiosClient();
        const config: AxiosRequestConfig = {
            url,
            method,
            data,
        };

        const response = await client.request<T>(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export {makeRequest};