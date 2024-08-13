import React from 'react';

const Container = ({children}) => {
    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow py-6 sm:py-12 px-8 min-w-[80%] lg:min-w-[60%]">
            <div className=" sm:p-6 ">
                {children}
            </div>
        </div>
    );
};

export default Container;
