import {ShortenUrlRequest} from "@/interfaces/requests";
import {makeRequest} from "@/services/requestsService";
import {ShortenUrlResponse} from "@/interfaces/responses";


const shawtyAPI = {
    shortenUrl: async (body: ShortenUrlRequest) => {
        return await makeRequest<ShortenUrlResponse>("api/v1/url-shortener/shorten", "POST", body);
    },
    getOriginalUrl: async (shortUrl: string) => {
        return await makeRequest<ShortenUrlResponse>(`api/v1/url-shortener/retrieve/${shortUrl}`, "GET", null);
    }
}

export default shawtyAPI;