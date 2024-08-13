import axios, {AxiosInstance, AxiosError, AxiosResponse} from "axios";

const axiosClient = (token: string | null = null): AxiosInstance => {
    // const headers = {
    //     "Content-Type": "multipart/form-data",
    // };
    var baseURL = process.env.NEXT_PUBLIC_BASEURL;
    if (!baseURL ) {
        console.log("No base URL found, using default")
        baseURL = "http://localhost:80"
    }
    const client = axios.create({
        baseURL: baseURL,
        // headers,
        timeout: 60000,
        withCredentials: false,
    });

    client.interceptors.request.use((config: any) => {
        config.headers = config.headers || {};
        return config;
    });

    client.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            throw error;
        }
    );

    return client;
};

export default axiosClient;