import React from 'react'
import Footer from '../components/footer/Footer';
import Task from '../components/homepage/Task';
import Navigation from '../components/navigation/Navigation';

function TaskPage() {
    return (
        <div>
            <Navigation />
            {/* This is the task page */}
            <Task />
            <Footer />
        </div>
    )
}

export default TaskPage
