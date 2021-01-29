import React, { useState } from 'react'

export const Appointment = ({ customer }) => {
    return (
        <div>
        <table>
            <tbody>
                <tr id="name"><td id="title">Customer</td><td id="value">{customer.firstName} {customer.lastName}</td></tr>
                <tr id="phone"><td id="title">Phone Number</td><td id="value">{customer.phoneNumber}</td></tr>
                <tr id="stylist"><td id="title">Stylist</td><td id="value">{customer.stylist}</td></tr>
                <tr id="service"><td id="title">Service</td><td id="value">{customer.service}</td></tr>
                <tr id="notes"><td id="title">Notes</td><td id="value">{customer.notes}</td></tr>
            </tbody>
        </table>        
    </div>
    )
}  

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