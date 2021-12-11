import React from 'react'
import Footer from '../components/footer/Footer';
import Calendar from '../components/homepage/Calendar';
import Sidebar from '../components/homepage/Sidebar';
import Task from '../components/homepage/Task';
import Navigation from '../components/navigation/Navigation';

function HomePage() {
    return (
        <div>
            <Navigation />
            This is the Home Page
            <div className="d-flex justify-content-between mt-4">
                <Sidebar />
                <Task />
                <Calendar />
            </div>

            <Footer />
        </div>
    )
}

export default HomePage
