import { Alert } from 'reactstrap'

export default function Alerting({ color, message }) {
    return <Alert color={color}>{message}</Alert>
}
