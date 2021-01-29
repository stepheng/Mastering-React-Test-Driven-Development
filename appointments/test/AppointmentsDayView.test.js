import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { AppointmentsDayView,
        AppointmentHeader
} from '../src/AppointmentsDayView'
import {sampleAppointments, SampleAppointments} from '../src/sampleData'
import { Appointment } from '../src/Appointment'

describe('Appointment', () => {
    let customer
    let container

    beforeEach( () => {
        customer = sampleAppointments[3].customer
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)

    it('renders the customer first name', () => {
        render(<Appointment customer={customer} />)

        expect(container.textContent).toMatch('Ashley')
    })

    it('renders another customer first name', () => {
        customer = sampleAppointments[4].customer

        render(<Appointment customer={customer} />)

        expect(container.textContent).toMatch('Jordan')
    })

    it('renders customer name entry', () => {
        render(<Appointment customer={customer} />)

        const firstRow = container.querySelector('#name')
        expect(firstRow.children).toHaveLength(2)
        expect(firstRow.querySelector('#title').textContent).toMatch('Customer')
        expect(firstRow.querySelector('#value').textContent).toMatch('Ashley Jordan')
    })
    it('renders customer phone number entry', () => {
        render(<Appointment customer={customer} />)

        const firstRow = container.querySelector('#phone')
        expect(firstRow.children).toHaveLength(2)
        expect(firstRow.querySelector('#title').textContent).toMatch('Phone Number')
        expect(firstRow.querySelector('#value').textContent).toMatch('555-1234')
    })

    it('renders customer stylist entry', () => {
        render(<Appointment customer={customer} />)

        const firstRow = container.querySelector('#stylist')
        expect(firstRow.children).toHaveLength(2)
        expect(firstRow.querySelector('#title').textContent).toMatch('Stylist')
        expect(firstRow.querySelector('#value').textContent).toMatch('Maggie')
    })

    it('renders customer service entry', () => {
        render(<Appointment customer={customer} />)

        const firstRow = container.querySelector('#service')
        expect(firstRow.children).toHaveLength(2)
        expect(firstRow.querySelector('#title').textContent).toMatch('Service')
        expect(firstRow.querySelector('#value').textContent).toMatch('Trim')
    })
    it('renders customer notes entry', () => {
        render(<Appointment customer={customer} />)

        const firstRow = container.querySelector('#notes')
        expect(firstRow.children).toHaveLength(2)
        expect(firstRow.querySelector('#title').textContent).toMatch('Notes')
        expect(firstRow.querySelector('#value').textContent).toMatch('Lorem ipsum')
    })
})

describe('AppointmentsDayView', () => {
    let container

    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)
    const today = new Date()
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: { firstName: 'Ashley' }
        },
        {
            startsAt: today.setHours(13, 0),
            customer: { firstName: 'Jordan' }
        }
    ]

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]} />)

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })

    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments} />)

        expect(container.querySelector('ol')).not.toBeNull()
        expect(container.querySelector('ol').children).toHaveLength(2)
    })

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />)

        const orderedList = container.querySelector('ol')
        expect(orderedList).not.toBeNull()
        const listItems = orderedList.querySelectorAll('li')
        expect(listItems).toHaveLength(2)
        expect(listItems[0].textContent).toEqual('12:00')
        expect(listItems[1].textContent).toEqual('13:00')
    })

    it('initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]} />)
        expect(container.textContent).toMatch('There are no appointments scheduled for today.')
    })

    it('selects the first appointment by default', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.textContent).toMatch('Ashley')
    })

    it('has a button element in each li', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        expect(
            container.querySelectorAll('li > button')
        ).toHaveLength(2)
        expect(
            container.querySelectorAll('li > button')[0].type
        ).toEqual('button')
    })

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        const button = container.querySelectorAll('button')[1]
        ReactTestUtils.Simulate.click(button)
        expect(container.textContent).toMatch('Jordan')
    })

    it('renders the header for the current appointment', () => {
        render(<AppointmentHeader appointment={appointments[0]} />)
        expect(container.textContent).toMatch('Today\'s appointment at 12:00')
    })
})
