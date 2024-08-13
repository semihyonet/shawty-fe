'use client'
import React from 'react';
import Button from "@/components/buttons/button";
import RadioInput from "@/components/radioInputs/radioInput";
import {Field, Form, Formik} from "formik";
import {createShortLinkFormSchema} from "@/components/forms/validation/createShortLinkFormSchema";
import LoadingNotification from "@/components/notifications/loadingNotification";
import Context from "@/context/context";

const radioElements = [
    {id: 0, title: 'Never Expire', value: 0},
    {id: 1, title: '1 Hour', value: 1},
    {id: 2, title: '1 Day', value: 24},
    {id: 3, title: '7 Days', value: 24 * 7},
]

const CreateShortLinkForm = () => {

    const {
        error,
        isLoading,
        setLoading,
        showLoadingNotification,
        setLoadingNotification,
        shortenUrlRequest
    } = React.useContext(Context);
    return (
        <Formik
            initialValues={{
                url: '',
                durationHours: 1,
            }}
            validationSchema={createShortLinkFormSchema}
            onSubmit={async (values) => {
                shortenUrlRequest(values.url, values.durationHours);
            }}>
            {
                ({errors, touched, setFieldValue}) => (
                    <Form>
                        <LoadingNotification show={showLoadingNotification} setShow={setLoadingNotification}
                                             contentMessage={"Your Shawty link will be up for grabs in a second!"}
                                             contentTitle={"Get ready to tweet!"}/>
                        <div className={"mb-4"}>
                            <label htmlFor="url" className="block text-xl font-medium leading-6 text-gray-900 ">
                                Paste your long link! {error}
                            </label>
                            <div className="mt-2 ">
                                <Field
                                    name="url"
                                    type="text"
                                    placeholder="https://example.com"
                                    className="text-lg sm:text-2xl block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:leading-8"
                                />
                                {errors.url && touched.url ? (
                                    <div className={"text-red-500"}>{errors.url}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className={"pb-8"}>
                            <RadioInput
                                radioElements={radioElements}
                                setInput={(val: number) => {
                                    setFieldValue("durationHours", val)
                                }}
                                errorText={errors.durationHours && touched.durationHours ? errors.durationHours : null}
                            />

                        </div>

                        <Button isActive={!isLoading} content={"Create Link"}/>
                    </Form>
                )}
        </Formik>
    )
};

export default CreateShortLinkForm;
