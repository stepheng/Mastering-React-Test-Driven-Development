import React from 'react'
import { createContainer } from './domManipulators'
import { CustomerForm } from '../src/CustomerForm'
import { internet } from 'faker'

describe('CustomerForm', () => {
    let render, container
    beforeEach(() => {
        ({ render, container } = createContainer())
    })
    const form = id => container.querySelector(`form[id="${id}"]`)

    it('renders a form', () => {
        render(<CustomerForm />)
        expect(form('customer')).not.toBeNull()
    })

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull()
        expect(formElement.tagName).toEqual('INPUT')
        expect(formElement.type).toEqual('text')
    }

    const firstNameField = () => form('customer').elements.firstName

    it('renders the first name field as a text box', () => {
        render(<CustomerForm />)
        const field = form('customer').elements.firstName
        expectToBeInputFieldOfTypeText(firstNameField())
    })

    it('includes the existing value for the first name', () => {
        render(<CustomerForm firstName="Ashley" />)
        const field = firstNameField()
        expectToBeInputFieldOfTypeText(field)
        expect(field.value).toEqual('Ashley')
    })

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`)

    it('renders a label for the first name field', () => {
        render(<CustomerForm />)
        expect(labelFor('firstName')).not.toBeNull()
        expect(labelFor('firstName').textContent).toEqual('First name')
    })
})