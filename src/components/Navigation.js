import React from "react"

const Navigation = ({currentPage, handlePageChange}) => {
    
    return (
        <ul className='flex flex-row justify-center border border-solid rounded-full'>           
            <li className="">
                <a className= {
                currentPage === '#About' ?
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='#About' onClick = {() => handlePageChange('#About')}>About</a>

            </li>
            <li>            
                <a className= {
                currentPage === '#Portfolio' ?
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='#Portfolio' onClick = {() => handlePageChange('#Portfolio')}>Portfolio</a> 
            </li>
            <li>            
                <a className= {
                currentPage === '#Contact' ?
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='#Contact' onClick = {() => handlePageChange('#Contact')}>Contact</a>
            </li>
            <li>            
                <a className= {
                currentPage === '#Resume' ?
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='#Resume' onClick = {() => handlePageChange('#Resume')}>Resume</a>
            </li>
            <li>            
                <a className= {
                currentPage === '#Gallery' ?
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'inline-block align-middle p-3 md:p-7 text-sm md:text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='#Gallery' onClick = {() => handlePageChange('#Gallery')}>Gallery</a>
            </li>
        </ul>
    );
};


export default Navigation;