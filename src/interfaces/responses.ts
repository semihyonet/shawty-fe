interface ShortenUrlResponse {
    short_url: string;
    original_url: string;
    expires_at: Date;
}

export {ShortenUrlResponse};