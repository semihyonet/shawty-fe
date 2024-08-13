'use client'

import React from "react";
import {ArrowPathIcon, ExclamationTriangleIcon} from "@heroicons/react/16/solid";
import BaseNotification from "@/components/notifications/baseNotification";
import Context from "@/context/context";

export default function NegativeNotification() {
    const {setError, error} = React.useContext(Context);

    return (
        <BaseNotification show={!!error} setShow={() => setError(null)}>
            <div className="flex-shrink-0">
                <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-700 "/>
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">An Error occured...</p>
                <p className="mt-1 text-sm text-gray-500">{error}</p>
            </div>
        </BaseNotification>
    )
}
