import React from 'react'
import ReactDOM from 'react-dom'
import {AppointmentsDayView} from './AppointmentsDayView'
import {sampleAppointments, SampleAppointments} from './sampleData'

ReactDOM.render(
    <AppointmentsDayView appointments={sampleAppointments} />,
    document.getElementById('root')
)