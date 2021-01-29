import React from 'react'

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
