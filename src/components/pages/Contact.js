import React from "react";


const Contact = () => {

    const formSumbitHandler = (e) => {
        e.preventDefault();
        const emailSub = document.getElementById("subject").value;
        // const name = document.getElementById("name").value;
        // const email = document.getElementById("email").value;
        const mailTo = 'cristinocastro4@gmail.com'
        const message = document.getElementById("message").value;
        document.getElementById("alert").setAttribute("class", "text-green-400 p-3");
        // window.open('mailto:'+mailTo+'&subject='+emailSub+'&body='+message);
        window.location.href = `mailto:${mailTo}?Subject=${emailSub}&body=${message}`;


    };

    return (
        <div className="flex flex-col items-center">
            <p className="font-sans text-5xl font-bold">Contact Form</p>
            <div className="flex flex-row items-center flex-wrap m-4 p-2 justify-center">
                <div className="w-1/3 md:w-100 m-10">
                    <img src="./atlantis.jpg" className="" alt="atlantis"/>
                </div>
                <form className="flex flex-col border rounded-md" onSubmit={(e) => {formSumbitHandler(e)}}>
                    <label htmlFor="name" className="p-3 font-medium font-sans text-gray-300">Name</label>
                    <input type="text" name="name" id="name" className=" p-1 m-3" required/>
                    <label htmlFor="email" className="p-3 font-medium font-sans text-gray-300">Email</label>
                    <input type="email" name="email" id="email" className=" p-1 m-3" required/>
                    <label htmlFor="subject" className="p-3 font-medium font-sans text-gray-300">Subject</label>
                    <input type="text" name="subject" id="subject" className=" p-1 m-3" required/>
                    <label htmlFor="message" className="p-3 font-medium font-sans text-gray-300">Message</label>
                    <textarea type="text" name="message" id="message" className="p-1 m-3" required maxLength="300" rows="6" cols="50"/>
                    <div className="flex flex-row justify-between">
                        <p className="p-3 font-medium font-sans text-gray-300">Maximum 300 Characters</p>
                        <button type="submit" className="font-sans p-3 m-3 border rounded-md text-gray-100 bg-blue-950 hover:bg-blue-700 active:text-blue-500"
                        >Send</button>
                    </div>
                    <p className="hidden" id="alert">Form Submitted!</p>
                </form>
            </div>
        </div>
    );
};


export default Contact;