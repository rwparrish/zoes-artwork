import React, { useState } from 'react';
import {useFormik} from 'formik';

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values);
            fetch("http://127.0.0.1:8000/api/contact_requests", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        }
    });



    return (
        <section className="flex flex-col justify-center items-center h-auto py-12">
            <h1 className="text-3xl py-12">Get in touch</h1>
            <div className="flex flex-col bg-black/10 w-full max-w-screen-xl justify-center items-center gap-8 py-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full max-w-screen-md">
                    <input onChange={formik.handleChange} value={formik.values.name} name="name" type="text" placeholder="Name" className="p-2 border border-black/20" />
                    <input onChange={formik.handleChange} value={formik.values.phone} name="phone" type="tel" placeholder="Phone" className="p-2 border border-black/20" />
                    <input onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="Email" className="p-2 border border-black/20" />
                    <textarea onChange={formik.handleChange} value={formik.values.message} name="message" placeholder="Message" className="p-2 border border-black/20"></textarea>
                    <button type="submit" className="p-2 bg-black text-white">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;