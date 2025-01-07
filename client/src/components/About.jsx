import React from 'react';


const About = () => {
    return (
        <section className="flex flex-col justify-center items-center h-auto py-12">
            <h1 className="text-3xl py-12">About the Artist</h1>
            <div className="flex flex-col bg-black/10 w-full max-w-screen-xl justify-center items-center gap-8 py-20">
                <p>Artist Bio</p>
                <p>Artist Statement</p>
            </div>
        </section>
    );
};

export default About;


