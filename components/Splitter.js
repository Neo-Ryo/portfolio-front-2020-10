import styles from '../styles/Splitter.module.css'

export default function Splitter({ children }) {
    return (
        <div className={styles.wrapper}>
            <hr className={styles.splitter} />
            <p
                style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: 20,
                    fontWeight: 500,
                }}
            >
                {children}
            </p>
            <hr className={styles.splitter} />
        </div>
    )
}
