import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import Section from '../components/Section'
import TechSection from '../components/TechSection'
import Splitter from '../components/Splitter'
import Panels from '../components/Panels'
import Projects from '../components/Projects'
import { Col, Row } from 'reactstrap'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import { useEffect } from 'react'
import panelTexts from '../lib/panelTexts'
import Axios from 'axios'
import url from '../lib/url'
import { v4 as uuidv4 } from 'uuid'

export async function getServerSideProps() {
    const res = await Axios.get(`${url}/api/counts`)
    const { views, likes } = res.data[0]
    return { props: { views, likes } }
}

export default function Home({ views, likes }) {
    useEffect(() => {
        const user = sessionStorage.getItem('uuidCheckingPortfolio')
        if (!user) {
            const uuid = uuidv4()
            sessionStorage.setItem('uuidCheckingPortfolio', uuid)
            Axios.put(`${url}/api/counts/views`)
        }
    }, [])

    return (
        <Layout>
            <Head>
                <title>SCHIAVONE Marc portfolio </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Raleway:ital,wght@0,300;1,500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Section>
                <p style={{ margin: '100px' }}>
                    Hi, I'm Marc and I'm a fullstack developper who loves to
                    create usefull apps to improve people's life. Even though
                    I'm quite at the beginnig of my journey, I feel like I can
                    accomplish anything with my skills and the things I learn
                    every days.
                </p>
            </Section>
            <TechSection />
            <Splitter>Description</Splitter>
            <Row style={{ margin: 0 }}>
                {panelTexts.map((item, k) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={4}
                        key={k}
                        style={{ textAlign: 'center' }}
                    >
                        <Panels {...item} key={k} />
                    </Col>
                ))}
            </Row>
            <Splitter>My projects</Splitter>
            <Projects />
            <Splitter>Links</Splitter>
            <AboutMe />
            <Splitter>Contact me</Splitter>
            <Contact />
            <Footer views={views} likes={likes} />
        </Layout>
    )
}
