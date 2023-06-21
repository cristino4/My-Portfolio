import React from 'react'
import Navigation from './Navigation';
import Avatar from './Avatar';

const Header = ({currentPage, handlePageChange}) => {
    return (
        <div className='flex flex-row justify-center w-full md:w-2/3'>
            <Avatar />
            <Navigation handlePageChange = {handlePageChange} currentPage={currentPage} />
        </div>
    );
};

export default Header;