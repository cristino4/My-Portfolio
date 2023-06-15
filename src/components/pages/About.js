import React from "react";


const About = ({handlePageChange}) => {



    return (
        <div className='flex flex-col'>
            <div className="hero bg-white dark:bg-zinc-900">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="./assets/images/rocket.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='me and my sister' />
                    <div>
                        <p className="font-sans text-5xl font-bold">Welcome!<br></br><br></br>I'm Cristino Castro.</p>
                        <p className="font-sans py-6">I'm an electrical engineer, software developer, and musician from 
                        Hesperia, California (located just outside of Los Angeles). <br></br><br></br>
                        I was raised in a small family with my only sibling and sister Caroline (seen with me on the left). 
                        Since I was a kid, my sister and I have been facinated by science and engineering. I remember 
                        bindge watching Bill Nye (the science guy, remember?) and PBS NOVA shows on TV or cassette. In school I was thrilled at 
                        new science experiements in chemistry class and played guitar in a rock band with my chemistry teacher.  
                        After a few years of doing music gigs I decided to attend college to learn the knowledge needed for engineering.<br></br><br></br>
                        During college, my hunger for knowledge led me to various school project experiences, scholarships that helped me become who I am today!
                        
                        In the 8 years after college graduation, i've worked as a college robotics instructor, science tutor,
                        Audio Visual (AV) electronics test engineer and later senior project engineer at Broadata Communications, and as an owner of a small business cellphone repair shop. 
                        I also worked as a data aquisition engineer for APPLUS IDIADA Karco, a vehicle crash test laboratory headquartered in Spain. 
                        <br></br><br></br>
                        Today, I continue my quest and I add web development to my many skills! I'm currently looking for a full-time position as a software engineer.
                        You may download my resume <a href='Resume' onClick = {() => handlePageChange('Resume')} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>here</a> 
                        or look at my software development portfolio 
                        <a href='Portfolio' onClick = {() => handlePageChange('Portfolio')} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>here</a> for more info.
                        <br></br><br></br>
                        Gracias!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;