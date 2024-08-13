import React from 'react';
import {ArrowPathIcon, CheckCircleIcon} from "@heroicons/react/16/solid";

const Button = ({content, callback, isActive}) => {
    return (
        <button
            type="submit"
            disabled={!isActive}
            className={`inline-flex items-center gap-x-2 rounded-md ${isActive ? "bg-red-600  hover:bg-red-500" : "bg-gray-600 hover:bg-gray-600 cursor-not-allowed"} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 `}
            onClick={callback}
        >
            {content}
            {
                (
                    isActive ?
                        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5"/> :
                        <ArrowPathIcon aria-hidden="true" className="-mr-0.5 h-5 w-5 animate-spin"/>
                )
            }
        </button>
    )
        ;
};

export default Button;
