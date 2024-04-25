import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import * as formik from 'formik'
import * as yup from 'yup'

function createContact(values) {
    return fetch(`/api/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}


const Contact = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
    })

    return (
        <Formik
            validationSchema={schema}
            validateOnChange={false}
            onSubmit={createContact}
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                city: '',
                state: '',
                zip: '',
            }}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <Form id="ContactId" noValidate onSubmit={handleSubmit}>
                    <Row>
                        <h1>Sección  de Registro</h1>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group id="firstName" as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="lastName" as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="email" as={Col} md="4" controlId="validationFormikEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group id='city' as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="state" as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group id="zip" as={Col} md="3" controlId="validationFormik05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.zip}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    )
}

export default Contact