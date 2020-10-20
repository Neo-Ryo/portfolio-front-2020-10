import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/Layout'
import { Button, Col, Row } from 'reactstrap'

export default function MyCV() {
    return (
        <Layout>
            <Head>
                <title>DOWNLOAD Resume </title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/css/bootstrap.min.css"
                    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Architects+Daughter&family=Permanent+Marker&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Row style={{ margin: '130px 0 50px 0' }}>
                <Col>
                    <Button href="/" color="warning" block outline>
                        Back
                    </Button>
                </Col>
            </Row>
            <Row style={{ margin: 0 }}>
                <Col
                    style={{ textAlign: 'center' }}
                    sm={{ size: 1, offset: 4 }}
                    md={{ size: 1, offset: 4 }}
                    lg={{ size: 1, offset: 4 }}
                >
                    <img
                        src="/images/download-50px.png"
                        alt="download icon"
                        width="20px"
                    />
                </Col>
                <Col
                    style={{ textAlign: 'center' }}
                    sm={{ size: 2 }}
                    md={{ size: 2 }}
                    lg={{ size: 2 }}
                >
                    <p>
                        <small>
                            You can download it only by clicking on it!
                        </small>
                    </p>
                </Col>
                <Col
                    style={{ textAlign: 'center' }}
                    sm={{ size: 1 }}
                    md={{ size: 1 }}
                    lg={{ size: 1 }}
                >
                    <img
                        src="/images/download-50px.png"
                        alt="download icon"
                        width="20px"
                    />
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <a href="/images/mycv.jpg" download>
                        <img src="/images/mycv.jpg" alt="mon cv" />
                    </a>
                </Col>
            </Row>
        </Layout>
    )
}
