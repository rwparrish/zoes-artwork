import React from 'react';


const About = () => {
    return (
        <section className="flex flex-col justify-center items-center h-auto py-12">
            <h1 className="text-3xl py-12">About the Artist</h1>
            <div className="flex flex-col bg-black/10 w-full max-w-screen-xl justify-center items-center gap-8 py-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                <p>Artist Bio</p>
                <p>Artist Statement</p>
            </div>
        </section>
    );
};

export default About;


