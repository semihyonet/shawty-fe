'use client'

import {useEffect, useState} from 'react'
import {Radio, RadioGroup} from '@headlessui/react'
import {CheckCircleIcon} from '@heroicons/react/20/solid'


export default function RadioInput({setInput, radioElements, errorText}) {
    useEffect(() => {
        if(!!radioElements && radioElements.length > 0) setSelectedRadioElement(radioElements[0])
    }, [radioElements])
    const [selectedRadioElement, setSelectedRadioElement] = useState({id: 1, title: '', value: 1});

    return (
        <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900">When should it expire?</legend>
            <RadioGroup
                value={selectedRadioElement}
                onChange={(val) => {
                    setSelectedRadioElement(val);
                    setInput(val.value)
                }}
                className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-4 sm:gap-x-4"
            >
                {!!radioElements && radioElements.map((radioElement) => (
                    <Radio
                        key={radioElement.id}
                        value={radioElement}
                        aria-label={radioElement.title}
                        className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus:outline-none data-[focus]:border-red-600 data-[focus]:ring-2 data-[focus]:ring-red-600"
                    >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">{radioElement.title}</span>
              </span>
            </span>
                        <CheckCircleIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-red-600 [.group:not([data-checked])_&]:invisible"
                        />
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-red-600"
                        />
                    </Radio>
                ))}
            </RadioGroup>
            {!!errorText && <div className="text-red-600">{errorText}</div>}
        </fieldset>
    )
}
