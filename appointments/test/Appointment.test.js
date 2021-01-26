import React from 'react'
import ReactDOM from 'react-dom'
import { Appointment } from '../src/Appointment'

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstNMame: 'Ashley' }
        const component = <Appointment customer={customer} />
        const container = document.createElement('div')
        document.body.appendChild(container)

        ReactDOM.render(<Appointment customer={customer} />, container)

        expect(container.textContent).toMatch('Ashley')
    })

    it.skip('renders another customer first name', () => {
        const customer = { firstNMame: 'Jordan' }
        const component = <Appointment customer={customer} />
        const container = document.createElement('div')
        document.body.appendChild(container)

        ReactDOM.render(component, container)

        expect(document.body.textContent).toMatch('Jordan')
    })
})
