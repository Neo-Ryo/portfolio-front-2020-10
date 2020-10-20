import Capsule from './Capsule'
import projects from '../lib/projectsData'
import { Col, Row } from 'reactstrap'

export default function Projects() {
    return (
        <Row style={{ margin: 0 }}>
            {projects.map((it, k) => (
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
    )
}
