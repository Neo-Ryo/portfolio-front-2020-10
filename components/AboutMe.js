import { Row, Col } from 'reactstrap'
import styles from '../styles/AboutMe.module.css'
import translate from '../utils/translate'

export default function AboutMe({ language }) {
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
                    {translate(language, 'github')}
                </a>
            </Col>
            <Col
                sm={{ size: 12 }}
                md={{ size: 12 }}
                lg={{ size: 4 }}
                className={styles.linkAbout}
            >
                <a href="/my-cv">{translate(language, 'resume')}</a>
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
                    {translate(language, 'linkedin')}
                </a>
            </Col>
        </Row>
    )
}
