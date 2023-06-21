import React from "react";




const Project = ({project}) => {
    return (
            <div className="my-5 p-2 collapse collapse-arrow rounded-2xl bg-zinc-800">
                <input type="checkbox" /> 
                <div className="collapse-title font-medium font-sans text-white">
                    <p className="text-xl">{project.title}</p>
                    <p className="text-sm text-blue-400">{project.techUsed}</p>
                    <p className="text-sm text-gray-500">{project.projectType}</p>
                </div>                
                <div className="collapse-content "> 
                    <div className="flex flex-row flex-wrap justify-center">
                        <p className="p-2 text-center text-lg font-medium font-sans text-gray-500">{project.description}</p>
                        <img className="p-2" src={project.image} alt={project.alt}/>
                    </div>
                    <div className = 'flex flex-row justify-evenly'>
                        <a href={project.appLink} className= {`${project.displayLinks} m-5 p-2 w-20 border hover:bg-zinc-700 rounded-full active:text-blue-500`} target="_blank" rel="noopener noreferrer">
                            <div className='text-center font-medium font-sans text-gray-500  hover:text-white dark:text-white'>
                                App
                            </div>
                        </a>
                        <a href={project.repoLink} className={`${project.displayLinks} m-5 p-2 w-20 border hover:bg-zinc-700 rounded-full active:text-blue-500`} target="_blank" rel="noopener noreferrer">
                            <div className='text-center font-medium font-sans text-gray-500  hover:text-white dark:text-white'>
                                Code
                            </div>
                        </a>
                    </div>
                </div>
            </div>
      );
};


export default Project;



  