import TechIcon from './TechIcons'
import styles from '../styles/TechSection.module.css'
import { Row, Col } from 'reactstrap'

const techArray = [
    {
        name: '/images/js-icon.png',
        altCom: 'javascript icon',
        width: '100px',
    },
    {
        name: '/images/bootstrap_logo.svg.png',
        altCom: 'bootstrap icon',
        width: '100px',
    },
    {
        name: '/images/icon-css.png',
        altCom: 'css icon',
        width: '80px',
    },
    {
        name: '/images/html.png',
        altCom: 'html icon',
        width: '100px',
    },
    {
        name: '/images/node-icon-21.png',
        altCom: 'node.js icon',
        width: '200px',
    },
    {
        name: '/images/nextjs.png',
        altCom: 'next.js icon',
        width: '100px',
    },
    {
        name: '/images/semantic-ui.png',
        altCom: 'semantic-ui icon',
        width: '100px',
    },
    {
        name: '/images/react-icon.png',
        altCom: 'react icon',
        width: '100px',
    },
]

export default function TechSection() {
    return (
        <Row style={{ margin: '50px 0' }}>
            <Col></Col>
            {techArray.map((it, k) => (
                <Col style={{ textAlign: 'center' }} key={it.name}>
                    <TechIcon
                        key={k}
                        img={it.name}
                        altCom={it.altCom}
                        width={it.width}
                    />
                </Col>
            ))}
            <Col></Col>
        </Row>
    )
}
