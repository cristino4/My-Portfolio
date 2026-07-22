import React from "react";


const About = ({handlePageChange}) => {



    return (
            <div className="hero flex flex-col w-full">
                <div className="hero-content flex-col lg:flex-row text-white">
                    <img src="./assets/images/rocket.jpg" className="rounded-lg shadow-2xl md:w-7/12" alt='me and my sister' />
                </div>
                <div className="text-white">
                    <p className="font-sans text-4xl font-bold text-center">Welcome!</p><br></br><br></br>
                    <p className="font-sans text-3xl font-bold text-center">I'm Cristino Castro</p>
                    <p className="font-sans py-6">I'm an electrical engineer and software developer from Hesperia, California. <br></br><br></br>
                    I was raised in a small family with my only sibling and sister Caroline (seen with me above). 
                    Since I was a kid, my sister and I have been fascinated by science and engineering. I remember 
                    binge watching Bill Nye (the science guy) and PBS NOVA shows on TV or cassette. In school I was thrilled at 
                    new science experiments in chemistry class and played guitar in a rock band with my chemistry teacher.  
                    <br></br><br></br>
                    During college, my hunger for knowledge led me to various school project experiences, scholarships that helped me become who I am today!
                    
                    After college graduation, i've worked as a college robotics instructor, science tutor, as an owner/operator of a small cellphone shop,
                    vehicle crash test data aquisition engineer, and an Audio Visual (AV) electronics senior test engineer. 
                    <br></br><br></br>
                    I am currently looking for a full-time position as a software or electronics engineer.
                    You may download my resume <a href='Resume' onClick = {() => handlePageChange('Resume')} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' target="_blank" rel="noopener noreferrer" >here</a> 
                    {} or look at my software portfolio {}
                    <a href='Portfolio' onClick = {() => handlePageChange('Portfolio')} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' target="_blank" rel="noopener noreferrer" >here</a> for more info.
                    <br></br><br></br>
                    Gracias!
                    </p>
                </div>
            </div>
    );
};


export default About;