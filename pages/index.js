import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import {
    Col,
    Row,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import Layout from '../components/Layout'
import Section from '../components/Section'
import TechSection from '../components/TechSection'
import Splitter from '../components/Splitter'
import Panels from '../components/Panels'
import Capsule from '../components/Capsule'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import panelTextsEn from '../lib/panelTextsEn'
import panelTextsFr from '../lib/panelTextsFr'
import projectsDataEn from '../lib/projectsDataEn'
import projectsDataFr from '../lib/projectsDataFr'
import Axios from 'axios'
import url from '../lib/url'
import { v4 as uuidv4 } from 'uuid'
import translate from '../utils/translate'

export async function getServerSideProps() {
    const res = await Axios.get(`${url}/api/counts`)
    const { views, likes } = res.data[0]
    return { props: { views, likes } }
}

export default function Home({ views, likes }) {
    const [language, setLanguage] = useState('fr')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }

    const panelSelector = () => {
        if (language === 'en') {
            return panelTextsEn
        } else {
            return panelTextsFr
        }
    }

    const projectSelector = () => {
        if (language === 'en') {
            return projectsDataEn
        } else {
            return projectsDataFr
        }
    }

    useEffect(() => {
        const user = sessionStorage.getItem('uuidCheckingPortfolio')
        if (!user) {
            const uuid = uuidv4()
            sessionStorage.setItem('uuidCheckingPortfolio', uuid)
            Axios.put(`${url}/api/counts/views`)
        }
    }, [language])

    return (
        <Layout>
            <Head>
                <title>SCHIAVONE Marc portfolio </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Raleway:ital,wght@0,300;1,500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Dropdown
                style={{ margin: '25px 50px' }}
                isOpen={dropdownOpen}
                toggle={toggle}
            >
                <DropdownToggle caret>{language}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={(e) => handleChange(e)} value="fr">
                        fr
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={(e) => handleChange(e)} value="en">
                        en
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Section>
                <p style={{ margin: '100px' }}>
                    {translate(language, 'introduction')}
                </p>
            </Section>
            <TechSection />
            <Splitter>Description</Splitter>
            <Row style={{ margin: 0 }}>
                {panelSelector().map((item, k) => (
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
            <Splitter>{translate(language, 'my-projects')}</Splitter>
            <Row style={{ margin: 0 }}>
                {projectSelector().map((it, k) => (
                    <Col style={{ textAlign: 'center' }} key={k}>
                        <Capsule
                            picture={it.picture}
                            title={it.title}
                            key={it.title}
                            link={it.link}
                            target={it.target}
                            rel={it.rel}
                            description={it.description}
                        />
                    </Col>
                ))}
            </Row>
            <Splitter>{translate(language, 'links')}</Splitter>
            <AboutMe language={language} />
            <Splitter>{translate(language, 'contact-me')}</Splitter>
            <Contact language={language} />
            <Footer language={language} views={views} likes={likes} />
        </Layout>
    )
}
