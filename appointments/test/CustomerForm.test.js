import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { createContainer } from './domManipulators'
import { CustomerForm } from '../src/CustomerForm'

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

    const field = name => form('customer').elements[name]

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`)

    const itRendersAsATextBox = (fieldName) =>
        it('renders as a text box', () => {
            render(<CustomerForm />)
            expectToBeInputFieldOfTypeText(field(fieldName))
        })

    const itIncludesTheExistingValue = (fieldName) =>
        it('includes the existing value', () => {
            render(<CustomerForm { ...{[fieldName]: 'value'}  } />)
            const inputField = field(fieldName)
            expectToBeInputFieldOfTypeText(inputField)
            expect(inputField.value).toEqual('value')
        })

    const itRendersALabel = (fieldName, expectedTextContent) => {
        it('renders a label', () => {
            render(<CustomerForm />)
            expect(labelFor(fieldName)).not.toBeNull()
            expect(labelFor(fieldName).textContent).toEqual(expectedTextContent)
        })
    }

    const itAssignsAnIdThatMatchesTheLabelId = (fieldName) => {
        it('assigns an id that matches the label id', () => {
            render(<CustomerForm />)
            expect(field(fieldName).id).toEqual(fieldName)
        })
    }

    const itSavesExistingValueWhenSubmitted = (fieldName) => {
        it('saves existing value when submitted', async () => {
            expect.hasAssertions()
            render(
                <CustomerForm
                    { ...{[fieldName]: 'existingValue'} }
                    onSubmit={props =>
                        expect(props[fieldName]).toEqual('existingValue')
                    }
                />
            )
            await ReactTestUtils.Simulate.submit(form('customer'))
        })
    }

    const itSavesNewValueWhenSubmitted = (fieldName, newValue) => {
        it('saves new value when submitted', async () => {
            expect.hasAssertions()
            render(
                <CustomerForm
                    { ...{[fieldName]: 'existingValue'} }
                    onSubmit={props =>
                        expect(props[fieldName]).toEqual(newValue)
                    }
                />
            )
            await ReactTestUtils.Simulate.change( field(fieldName), {
                target: { value: newValue }
            })
            await ReactTestUtils.Simulate.submit(form('customer'))
        })
    }

    describe('first name field', () => {
        const fieldName = 'firstName'
        itRendersAsATextBox(fieldName)
        itIncludesTheExistingValue(fieldName)
        itRendersALabel(fieldName, 'First name')
        itAssignsAnIdThatMatchesTheLabelId(fieldName)
        itSavesExistingValueWhenSubmitted(fieldName)
        itSavesNewValueWhenSubmitted(fieldName, 'newFirstName')
    })

    describe('last name field', () => {
        const fieldName = 'lastName'
        itRendersAsATextBox(fieldName)
        itIncludesTheExistingValue(fieldName)
        itRendersALabel(fieldName, 'Last name')
        itAssignsAnIdThatMatchesTheLabelId(fieldName)
        itSavesExistingValueWhenSubmitted(fieldName)
        itSavesNewValueWhenSubmitted(fieldName, 'newLastName')
    })

    describe('phone number field', () => {
        const fieldName = 'phoneNumber'
        itRendersAsATextBox(fieldName)
        itIncludesTheExistingValue(fieldName)
        itRendersALabel(fieldName, 'Phone number')
        itAssignsAnIdThatMatchesTheLabelId(fieldName)
        itSavesExistingValueWhenSubmitted(fieldName)
        itSavesNewValueWhenSubmitted(fieldName, '012345')
    })
})