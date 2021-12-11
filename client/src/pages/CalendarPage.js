import React from 'react'
import Footer from '../components/footer/Footer';
import Calendar from '../components/homepage/Calendar';
import Navigation from '../components/navigation/Navigation';

function CalendarPage() {
    return (
        <div>
            <Navigation />
            This is the Calendar Page
            <Calendar />
            <Footer />
        </div>
    )
}

export default CalendarPage
