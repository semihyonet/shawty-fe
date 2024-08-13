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
        console.log(error)
        var message = "Something went wrong!";
        if (error.response && error.response.data.error) {
            message = error.response.data.error;
        }
        return {error: message};
    }
}


export {makeRequest};