import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Badge, Button, Col, Row } from 'reactstrap'
import url from '../lib/url'
import Alert from './Alert'

export default function Footer({ views, likes }) {
    const [liked, setLiked] = useState(false)

    const handleLikes = (e) => {
        e.preventDefault()
        Axios.put(`${url}/api/counts/likes`)
        setLiked(true)
    }
    return (
        <>
            <Row
                style={{
                    margin: 0,
                    background: 'rgb(23,23,23)',
                    background:
                        'linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(74,73,73,1) 70%, rgba(98,97,97,0.7861345221682423) 100%)',
                }}
            >
                <Col
                    sm="6"
                    md="4"
                    lg="4"
                    style={{ textAlign: 'center', marginTop: '8vh' }}
                >
                    <Button color="primary" outline>
                        Site visited <Badge color="secondary">{views}</Badge>
                    </Button>
                </Col>
                <Col
                    sm="12"
                    md="4"
                    lg="4"
                    style={{
                        textAlign: 'center',
                        marginTop: '8vh',
                    }}
                >
                    <p style={{ color: '#ffc107', fontSize: 22 }}>
                        This website is made with love and Next.js by Marc S.
                    </p>
                </Col>
                <Col
                    sm="6"
                    md="4"
                    lg="4"
                    style={{ textAlign: 'center', marginTop: '8vh' }}
                >
                    <Button
                        color="danger"
                        outline
                        disabled={liked}
                        onClick={(e) => handleLikes(e)}
                    >
                        Like <img src="/images/heart20px.png" alt="like icon" />
                        <Badge color="secondary" style={{ marginLeft: 10 }}>
                            {liked ? likes + 1 : likes}
                        </Badge>
                    </Button>
                    {liked ? (
                        <Alert color="danger" message="Thank you!!!" />
                    ) : (
                        ''
                    )}
                </Col>
            </Row>
        </>
    )
}
