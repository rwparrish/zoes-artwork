import React, { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone : '',
        email: '',
        message: ''
    });

    

    return (
        <section className="flex flex-col justify-center items-center h-auto py-12">
            <h1 className="text-3xl py-12">Get in touch</h1>
            <div className="flex flex-col bg-black/10 w-full max-w-screen-xl justify-center items-center gap-8 py-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <form className="flex flex-col gap-4 w-full max-w-screen-md">
                    <input type="text" placeholder="Name" className="p-2 border border-black/20" />
                    <input type="tel" placeholder="Phone" className="p-2 border border-black/20" />
                    <input type="email" placeholder="Email" className="p-2 border border-black/20" />
                    <textarea placeholder="Message" className="p-2 border border-black/20"></textarea>
                    <button type="submit" className="p-2 bg-black text-white">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;