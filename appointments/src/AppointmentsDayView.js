import React, { useState } from 'react'
import { Appointment } from './Appointment'

export const AppointmentHeader = ({ appointment }) => (
    <div><h1>Today's appointment at 12:00</h1></div>
)

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':')
    return `${h}:${m}`
}

export const AppointmentsDayView = ({appointments}) => {
    const [selectedAppointment, setSelectedAppointment] = useState(
        0
    )
    return (
        <div id="appointmentsDayView">
            <table>
                <tbody>
                <tr>
                    <td>
                    </td>
                    <td><AppointmentHeader {...appointments[selectedAppointment]} /></td>
                </tr>
                <tr>
                    <td>
                        <ol>
                            {appointments.map((appointment, i) => (
                                <li key={appointment.startsAt}>
                                    <button
                                        type="button"
                                        onClick={ () => setSelectedAppointment(i)}
                                    >
                                        {appointmentTimeOfDay(appointment.startsAt)}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td>
                        {appointments.length === 0 ? (
                        <p>There are no appointments scheduled for today.</p>
                    ) : (
                        <Appointment {...appointments[selectedAppointment]} />
                    )}

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}