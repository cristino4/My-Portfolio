import React from "react";
import Project from '../Project';




const Portfolio = () => {
    console.log(process.env.PUBLIC_URL)
    const webProjects =  [
        {
            title: 'Weather Dashboard',
            projectType: 'Solo Project',
            techUsed: 'Tailwind/DaisyUI',
            description: `A simple client-side application showing how to use a 3rd-party weather API to
            obtain and display weather data for cities world-wide`,
            repoLink: 'https://github.com/cristino4/6-weather-dashboard',
            appLink: 'https://cristino4.github.io/6-weather-dashboard/',
            image: `${process.env.PUBLIC_URL}/assets/images/weather-dashboard.png`,
            displayLinks: ''
        },
        {
            title: 'The Marketplace',
            projectType: 'Group Project',
            techUsed: 'MySQL/Stripe/Handlebars JS/Tailwind/DaisyUI/Heroku',
            description: 'An e-commerce site showcasing Stripe implementation and server-side rendering of pages - I worked on the search feature, navbar, home and search pages.',
            repoLink: 'https://github.com/nshaw973/The-Marketplace',
            appLink: 'https://group-3-marketplace.herokuapp.com/',
            image: `${process.env.PUBLIC_URL}/assets/images/themarketplace.png`,
            displayLinks: ''
            
        },
        {
            title: 'Digital Cookbook',
            projectType: 'Group Project',
            techUsed: 'Tailwind/DaisyUI/3rd Party API’s',
            description: 'Allows users to search the Free Meal API and view recipes and nutrition information.',
            repoLink: 'https://github.com/Carechiga/Easy-Recipe-App',
            appLink: 'https://carechiga.github.io/Easy-Recipe-App/',
            image: `${process.env.PUBLIC_URL}/assets/images/recipe-app.png`,
            displayLinks: ''

        },
        {
            title: 'Techy Blog',
            projectType: 'Solo Project',
            techUsed: 'MySQL/Express JS/Express-Sessions/Handlebars JS/REST API/Heroku',
            description: 'A blog site for tech enthusiasts - Create an account to create, view, update and comment blog posts.',
            repoLink: 'https://github.com/cristino4/14-tech-blog',
            appLink: 'https://tech-blog-14-cc.herokuapp.com/',
            image: `${process.env.PUBLIC_URL}/assets/images/techy-blog.png`,
            displayLinks: ''

        },
        {
            title: 'Employee Tracker CLI',
            projectType: 'Solo Project',
            techUsed: 'MySQL/Inquirer/JS',
            description: 'Manage an organization’s employees through a command line interface - CRUD employees from the MySQL database.',
            repoLink: 'https://github.com/cristino4/12-employee-tracker',
            appLink: 'https://www.youtube.com/watch?v=xybI3pLzSBg',
            image: `${process.env.PUBLIC_URL}/assets/images/employee-tracker.png`,
            displayLinks: ''

        },
        {
            title: 'Social Network REST API',
            projectType: 'Solo Project',
            techUsed: 'MongoDB/Express JS/Express-Router/REST API',
            description: 'CRUD your thoughts and reactions with a basic social network API. Add friends and react to their thoughts.',
            repoLink: 'https://github.com/cristino4/18-social-network-api',
            appLink: 'https://www.youtube.com/watch?v=fc9kLdqZopw',
            image: `${process.env.PUBLIC_URL}/assets/images/social-network-api.png`,
            displayLinks: ''

        },
        {
            title: 'Personal Portfolio',
            projectType: 'Solo Project',
            techUsed: 'React/JSX/Tailwind/DaisyUI',
            description: 'My personal portfolio showcasing my web development, embedded programming, and electronics test validation projects',
            repoLink: 'https://github.com/cristino4/My-Portfolio/',
            appLink: 'https://cristino4.github.io/My-Portfolio/',
            image: `${process.env.PUBLIC_URL}/assets/images/portfolio.png`,
            displayLinks: ''

        }
    ];

    const testScriptingProjects = [
        {
            title: 'Device Production Testing and Provisioning App',
            projectType: 'Solo Project',
            techUsed: 'Python/Tkinter/Semtech Blueriver API',
            description: 'Production personnel may view a encoder or decoder’s current state and provision before shipping',
            repoLink: null,
            appLink: null,
            image: `${process.env.PUBLIC_URL}/assets/images/br-testing1.png`,
            displayLinks: 'invisible'

        },
        {
            title: 'Power Cycle Device Scripting',
            projectType: 'Group Project',
            techUsed: 'Python/Proprietary A/V device API’s',
            description: 'Power cycle a device and check it’s status to identify failure cases and characterize reliability',
            repoLink: null,
            appLink: null,
            image: `${process.env.PUBLIC_URL}/assets/images/apitest.png`,
            displayLinks: 'invisible'
        },
        
    ];
    
    return (
        <div>
            <div className="rounded-full border-4 border-gray-700 m-4 p-2 bg-[linear-gradient(to_right,rgba(24,24,27,1.000),rgba(24,24,27,0)),url('https://cristino4.github.io/My-Portfolio/assets/images/code.png')]">
                <p className="px-4 text-2xl font-sans font-medium text-gray-100 dark:text-white ">Web Development</p>
            </div>
            {webProjects.map((project) => (
                <Project project={project} key={project.title}/>
            ))}
            <div className="rounded-full border-4 border-gray-700 m-4 p-2 bg-[linear-gradient(to_right,rgba(24,24,27,1.000),rgba(24,24,27,0)),url('https://cristino4.github.io/My-Portfolio/assets/images/apitest.png')]">
                <p className="px-4 text-2xl font-sans font-medium text-gray-100 dark:text-white ">Verification & Validation</p>
            </div>
            {testScriptingProjects.map((project) => (
                <Project project={project} key={project.title}/>
            ))}
        </div>
      );
};


export default Portfolio;



  