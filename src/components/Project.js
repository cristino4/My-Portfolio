import React from "react";




const Project = ({project}) => {
    return (
        <div className="m-4 p-2">
            <div className="collapse collapse-arrow rounded-2xl bg-white dark:bg-zinc-900">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium font-sans text-gray-500 hover:text-white dark:text-white">
                    <p>{project.title}</p>
                    <p className="text-gray-500 text-lg">{project.techUsed}</p>
                    <p className="text-gray-500 text-sm">{project.projectType}</p>
                    

                </div>
                
                <div className="collapse-content "> 
                    <div className="grid grid-cols-2 grid-rows-1">
                        <p className="p-2 text-center text-lg place-self-center font-medium font-sans text-gray-500 dark:text-gray-400 ">{project.description}</p>
                        <img className="p-2 place-self-center" src={project.image} alt='project'/>
                    </div>
                    <div className = 'flex flex-row justify-evenly'>

                        <a href={project.appLink} className='m-5 p-2 w-20 border hover:bg-zinc-700 rounded-full active:text-blue-500'>
                            <div className='text-center font-medium font-sans text-gray-500  hover:text-white dark:text-white'>
                                App
                            </div>
                        </a>
                        <a href={project.repoLink} className='m-5 p-2 w-20 border hover:bg-zinc-700 rounded-full active:text-blue-500'>
                            <div className='text-center font-medium font-sans text-gray-500  hover:text-white dark:text-white'>
                                Code
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      );
};


export default Project;



  