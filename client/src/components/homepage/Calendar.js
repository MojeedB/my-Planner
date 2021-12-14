import React from 'react'
import {
    Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,
    // EventSettingsModel
} from '@syncfusion/ej2-react-schedule';

function Calendar() {
    return (
        <div className='mt-4'>
            {/* This is the calendar bar */}
            <ScheduleComponent currentView='Month'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar
