import React from 'react'
import ReactDOM from 'react-dom'
import { Appointment } from '../src/Appointment'

describe('Appointment', () => {
    let customer
    let container

    beforeEach( () => {
        container = document.createElement('div')
    })

    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' }
        document.body.appendChild(container)

        ReactDOM.render(<Appointment customer={customer} />, container)

        expect(container.textContent).toMatch('Ashley')
    })

    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' }
        document.body.appendChild(container)

        ReactDOM.render(<Appointment customer={customer} />, container)

        expect(container.textContent).toMatch('Jordan')
    })
})
