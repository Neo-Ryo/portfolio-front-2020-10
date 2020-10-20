import { Container, Row, Col, Button } from 'reactstrap'
import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
    return (
        <Row className={styles.rowWrap}>
            <Col
                sm={{ size: 12 }}
                md={{ size: 12 }}
                lg={{ size: 4 }}
                className={styles.linkAbout}
            >
                <a
                    href="https://github.com/Neo-Ryo"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    Github profile
                </a>
            </Col>
            <Col
                sm={{ size: 12 }}
                md={{ size: 12 }}
                lg={{ size: 4 }}
                className={styles.linkAbout}
            >
                <a href="/my-cv">resume</a>
            </Col>
            <Col
                sm={{ size: 12 }}
                md={{ size: 12 }}
                lg={{ size: 4 }}
                className={styles.linkAbout}
            >
                <a
                    href="https://www.linkedin.com/in/marc-schiavone/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >
                    Linkedin profile
                </a>
            </Col>
        </Row>
    )
}
