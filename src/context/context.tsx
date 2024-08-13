"use client"

import React, {createContext, useState} from "react";
import {ShortenUrlResponse} from "@/interfaces/responses";
import shawtyAPI from "@/api/shawtyAPI";


const Context = createContext(null);

export const ShawtyProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = React.useState(false);
    const [showLoadingNotification, setLoadingNotification] = React.useState(false);
    const [shortenResponse, setShortenResponse] = React.useState<ShortenUrlResponse | { error: string }>(null);


    const shortenUrlRequest = async (originalUrl: string, durationHours: number) => {

        setLoading(true);
        setLoadingNotification(true);
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + durationHours);
        const request = {
            url: originalUrl,
            expiration_date: durationHours === 0 ? null : expiresAt.toISOString()
        };
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const apiResponse: ShortenUrlResponse | { error: string } = await shawtyAPI.shortenUrl(request);

        setLoading(false);
        setLoadingNotification(false);
        if ('error' in apiResponse) {
            setError(apiResponse.error);
            return;
        }
        setShortenResponse(apiResponse);
    }

    const values = {
        error,
        setError,
        isLoading,
        setLoading,
        showLoadingNotification,
        setLoadingNotification,
        shortenUrlRequest,
        shortenResponse,
        setShortenResponse
    };

    return <Context.Provider value={values}> {children} </Context.Provider>;
};

export default Context;
