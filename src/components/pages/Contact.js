import React from "react";


const Contact = () => {

    const formSumbitHandler = (e) => {
        e.preventDefault();
        const emailSub = 'Portfolio Site: ' + document.getElementById("subject").value;
        const mailTo = 'cristinocastro4@gmail.com'
        const message = document.getElementById("message").value;
        document.getElementById("alert").setAttribute("class", "text-green-400 p-3");
        window.location.href = `mailto:${mailTo}?Subject=${emailSub}&body=${message}`;


    };

    return (
        <div className="flex flex-col items-center w-full text-white my-10">
            <p className="font-sans text-4xl md:text-5xl font-bold">Contact Form</p>
            <p className="font-sans text-md md:text-lg font-bold text-center w-2/3 m-10">Submit the form below to contact me through e-mail, or you may call me at my direct lines below.</p>
            <div className="flex flex-col">
                <div className="flex flex-row items-center flex-wrap m-4 p-2 justify-center">
                    <div className="md:m-10">
                        <img src="./assets/images/atlantis.jpg" className="" alt="atlantis"/>
                        <p className="text-xs text-center">This is the space shuttle Atlantis located at Kennedy Space Center in Florida. It's physical presentation is one of the most moving displays of technology i've experienced. </p>
                    </div>
                    <form className="flex flex-col border rounded-md text-black mt-10" onSubmit={(e) => {formSumbitHandler(e)}}>
                        <label htmlFor="name" className="p-3 font-medium font-sans text-gray-300">Name</label>
                        <input type="text" name="name" id="name" className=" p-1 m-3" required/>
                        <label htmlFor="email" className="p-3 font-medium font-sans text-gray-300">Email</label>
                        <input type="email" name="email" id="email" className=" p-1 m-3" required/>
                        <label htmlFor="subject" className="p-3 font-medium font-sans text-gray-300">Subject</label>
                        <input type="text" name="subject" id="subject" className=" p-1 m-3" required/>
                        <label htmlFor="message" className="p-3 font-medium font-sans text-gray-300">Message</label>
                        <textarea type="text" name="message" id="message" className="resize-none p-1 m-3 text-black" required maxLength="500" rows="6" cols="10"/>
                        <div className="flex flex-row justify-between">
                            <p className="p-3 font-medium font-sans text-gray-300">*Maximum 500 characters</p>
                            <button type="submit" className="font-sans p-3 m-3 border rounded-md text-gray-100 bg-blue-950 hover:bg-blue-700 active:text-blue-500"
                            >Send</button>
                        </div>
                        <p className="hidden" id="alert">Form Submitted!</p>
                    </form>         
                </div>
                <div className="flex flex-col ">
                    <p className="font-sans text-lg font-bold text-center mt-10">Direct Line: (323)-427-3299</p>
                    <p className="font-sans text-lg font-bold text-center mt-10">Email: cristinocastro4@gmail.com</p>
                    <a className="font-sans text-lg font-bold text-center mt-10" target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/cristino-castro-9b3a91bb/">LinkedIn
                    </a>         
                </div>  
            </div>

        </div>
    );
};


export default Contact;