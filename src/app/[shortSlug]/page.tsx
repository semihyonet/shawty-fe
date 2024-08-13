"use client"

import React, {useEffect} from 'react';
import shawtyAPI from "@/api/shawtyAPI";
import {ShortenUrlResponse} from "@/interfaces/responses";
import {redirect} from "next/navigation";

const Page = async ({params}) => {
        const response = await shawtyAPI.getOriginalUrl(params.shortSlug)

        if ('error' in response) {
            //     redirect to 404
            redirect("/404")
        }
        // redirect to response.originalUrl
        // is instance shortenurlresponse
        if (response?.original_url) {
            redirect(response.original_url)
        }
        redirect("/404")
    }
;

export default Page;
