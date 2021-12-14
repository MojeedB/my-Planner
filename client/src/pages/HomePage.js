import React from 'react'
import Footer from '../components/footer/Footer';
import Calendar from '../components/homepage/Calendar';
// import Sidebar from '../components/homepage/Sidebar';
import Task from '../components/homepage/Task';
import Navigation from '../components/navigation/Navigation';

function HomePage() {
    return (
        <div>
            <Navigation />
            This is the Home Page
            <div className='row'>
                {/* <div className='col'>
                    <Sidebar />
                </div> */}
                <div className='col'>
                    <Task />
                </div>
                <div className='col-8'>
                    <Calendar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
