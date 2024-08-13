'use client'

import {CheckCircleIcon} from '@heroicons/react/24/outline'
import BaseNotification from "@/components/notifications/baseNotification";

export default function PositiveNotification({show, setShow, contentTitle, contentMessage}) {

    return (
        <BaseNotification show={show} setShow={setShow}>
            <div className="flex-shrink-0">
                <CheckCircleIcon aria-hidden="true" className="h-6 w-6 text-green-400"/>
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{contentTitle}</p>
                <p className="mt-1 text-sm text-gray-500">{contentMessage}</p>
            </div>
        </BaseNotification>
    )
}
