import { useState, ChangeEvent, FormEvent } from "react"
import { Container } from "react-bootstrap"


function ComplexState() {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    })

    const [submitContact, setSummitContact] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    })

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setContact(prev => {
            if (name === "firstName") {
                return {
                    firstName: value,
                    lastName: prev.lastName,
                    phoneNumber: prev.phoneNumber,
                }
            } else if (name === "lastName") {
                return {
                    firstName: prev.firstName,
                    lastName: value,
                    phoneNumber: prev.phoneNumber,
                }
            } else {
                return {
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    phoneNumber: value,
                }
            }
        })
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSummitContact(contact)
    }

    return (
        <Container>
            <h1>Hello {submitContact.firstName} {submitContact.lastName}</h1>
            <p>{submitContact.phoneNumber}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={contact.firstName} onChange={onChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={contact.lastName} onChange={onChange} />
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={contact.phoneNumber} onChange={onChange} />
                <button>Submit</button>
            </form>
        </Container>
    )
}

export default ComplexState;
