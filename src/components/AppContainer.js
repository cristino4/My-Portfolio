import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Resume from './pages/Resume';



const AppContainer = () => {
    var pathname = window.location.hash;
    if(pathname ===''){
        pathname = '#About'
    }
    const [currentPage, setCurrentPage] = useState(pathname);

    const renderPage = () => {
        if (currentPage === '#About') {
            return <About handlePageChange={(page)=>setCurrentPage(page)}/>;
        } else if (currentPage === '#Contact') {
            return <Contact />;
        } else if (currentPage === '#Portfolio') {
            return <Portfolio />;
        } else if (currentPage === '#Gallery') {
            return <Gallery />;
        } else if (currentPage === '#Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
            <div className='flex flex-col items-center bg-black p-5 w-full md:w-6/12'>
                <Header currentPage = {currentPage} handlePageChange = {handlePageChange}/>
                {renderPage()}
                <Footer />
            </div>
    )
};

export default AppContainer;