import React from 'react'
import { CardBody, Card, CardHeader, CardText } from 'reactstrap'

const Panel = ({ title, text }) => {
    return (
        <>
            <h3
                style={{
                    fontSize: 28,
                    fontFamily: 'Permanent Marker, cursive',
                    whiteSpace: 'nowrap',
                    margin: '10px 0px',
                    color: '#3b5998',
                }}
            >
                {title}
            </h3>

            <Card>
                <CardBody>
                    <CardText
                        style={{
                            fontSize: 20,
                            letterSpacing: 2,
                            lineHeight: '1.4',
                            textAlign: 'left',
                        }}
                    >
                        {text}{' '}
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Panel
