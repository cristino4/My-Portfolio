import React from "react"

const Navigation = ({currentPage, handlePageChange}) => {
    
    return (
        <ul className='flex flex-row justify-center items-center border border-solid rounded-full mx-10 bg-white dark:bg-zinc-900	'>
            <li className="py-5">
                <a className= {
                currentPage === 'About' ?
                    'p-5 text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'p-5 text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='About' onClick = {() => handlePageChange('About')}>About</a>

            </li>
            <li>            
                <a className= {
                currentPage === 'Portfolio' ?
                    'p-5 text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'p-5 text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='Portfolio' onClick = {() => handlePageChange('Portfolio')}>Portfolio</a> 
            </li>
            <li>            
                <a className= {
                currentPage === 'Contact' ?
                    'p-5 text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'p-5 text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='Contact' onClick = {() => handlePageChange('Contact')}>Contact</a>
            </li>
            <li>            
                <a className= {
                currentPage === 'Resume' ?
                    'p-5 text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'p-5 text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='Resume' onClick = {() => handlePageChange('Resume')}>Resume</a>
            </li>
            <li>            
                <a className= {
                currentPage === 'Passions' ?
                    'p-5 text-lg font-medium font-sans text-gray-100  hover:text-white dark:text-white bg-blue-950 hover:bg-blue-700 rounded-full active:text-blue-500'
                :
                    'p-5 text-lg font-medium font-sans text-gray-500  hover:text-white dark:text-white  hover:bg-zinc-700 rounded-full active:text-blue-500'
                } href='Passions' onClick = {() => handlePageChange('Passions')}>Passions</a>
            </li>
        </ul>
    );
};


export default Navigation;