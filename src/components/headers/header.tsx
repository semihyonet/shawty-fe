import {Disclosure} from '@headlessui/react'

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">

                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Shawty"
                                src="logo.png"
                                className=" h-24 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Disclosure>
    )
}
