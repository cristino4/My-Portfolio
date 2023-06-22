import React from "react";


const Resume = () => {



    return (
        <div className="flex flex-col items-center my-10 mx-auto h-screen">
            <p className="text-white text-center">Click below to download my resume in PDF format</p>
            <div className="my-10">
                <a href="./assets/20230621_Cristino_Castro_Resume_K.pdf" target="_blank" rel="noopener noreferrer"  className="text-2xl font-medium font-sans text-white border rounded-full p-4">Download Resume</a>
            </div>
        </div>
    );
};


export default Resume;