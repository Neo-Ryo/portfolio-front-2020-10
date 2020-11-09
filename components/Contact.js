import React, { useState } from 'react'
import Axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import url from '../lib/url'
import translate from '../utils/translate'
import Alert from './Alert'

export default function Contact({ language }) {
    const [email, setEmail] = useState({ name: '', text: '' })
    const [isDisabled, setIsDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleMails = (e) => {
        const { name, text } = email
        if (emailIsValid(name)) {
            e.preventDefault()
            Axios.post(`${url}/email`, {
                emailFrom: name,
                emailTo: 'marco.sch4064@gmail.com',
                subject: `Email Portfolio de la part de: ${name}`,
                message: text,
            })
            setEmailSent(true)
        } else {
            e.preventDefault()
            setIsDisabled(true)
        }
    }

    const handleName = (e) => {
        setEmail({ ...email, name: e.target.value })
        setIsDisabled(false)
    }

    const handleText = (e) => {
        setEmail({ ...email, text: e.target.value })
    }

    return (
        <>
            <Row>
                <Col></Col>
                <Col>
                    {/* <Alert
                        color="warning"
                        message="This section is currently not working, it will soon, sorry."
                    /> */}
                </Col>
                <Col></Col>
            </Row>
            <Row style={{ margin: '20px 0' }}>
                <Col></Col>
                <Col sm={10} md={8} lg={6} style={{ textAlign: 'center' }}>
                    <Form onSubmit={(e) => handleMails(e)}>
                        <FormGroup>
                            <Label
                                style={{
                                    color: '#3b5998',
                                    fontSize: 18,
                                }}
                                for="email"
                            >
                                <b>Email adress</b>
                            </Label>
                            <Input
                                style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                }}
                                type="email"
                                name="name"
                                id="name"
                                placeholder="name@email.com"
                                onChange={(e) => handleName(e)}
                            />
                            {isDisabled ? (
                                <Alert color="danger" message="email invalid" />
                            ) : (
                                ''
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label
                                style={{ color: '#3b5998', fontSize: 18 }}
                                for="comment"
                            >
                                <b>Message</b>
                            </Label>
                            <Input
                                style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                    height: '20vh',
                                }}
                                placeholder="your message"
                                type="textarea"
                                name="comment"
                                id="comment"
                                onChange={(e) => handleText(e)}
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            disabled={isDisabled}
                            color="primary"
                        >
                            {translate(language, 'submit')}
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            {emailSent ? (
                <Row>
                    <Col
                        sm={{ size: 4, offset: 4 }}
                        md={{ size: 4, offset: 4 }}
                        lg={{ size: 4, offset: 4 }}
                    >
                        <Alert color="success" message="eMail sent!" />
                    </Col>
                </Row>
            ) : (
                ''
            )}
            <Row>
                <Col></Col>
                <Col style={{ textAlign: 'center', fontSize: 30 }}>
                    <a href="mailto:marco.sch4064@gmail.com">
                        {translate(language, 'send-email')}
                    </a>
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}
