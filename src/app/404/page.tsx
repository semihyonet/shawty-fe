import React from 'react';
import Container from "@/components/containers/container";
import CreateShortLinkForm from "@/components/forms/createShortLinkForm";

const MyComponent = () => {
    return (
        <div className="flex  flex-col items-center justify-between p-6 sm:p-24">
            <div>
                <div className={"mb-20"}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className=" font-bold leading-7 text-red-400 text-md text-pretty sm:text-2xl uppercase ">
                            Shawty not found 404... :( </h2>
                        <p className="mt-2 text text-3xl sm:text-6xl font-bold tracking-tight text-gray-900 ">
                            Shawty URL wasn't found <br/>
                            Why don't you create another one?
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <a href={"/"}
                           className="mt-16 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                            Go back to the homepage</a>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default MyComponent;
