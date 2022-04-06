import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center mt-8 uppercase'>
            <CustomLink className='ml-6 text-lg' to='/'>Home</CustomLink>
            <CustomLink className='ml-6 text-lg' to='/review'>Review</CustomLink>
            <CustomLink className='ml-6 text-lg' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='ml-6 text-lg' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='ml-6 text-lg' to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;