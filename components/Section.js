import styles from '../styles/Section.module.css'

export default function Layout({ children }) {
    return <div className={styles.main}>{children}</div>
}
