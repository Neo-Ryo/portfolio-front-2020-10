import Head from 'next/head'
import styles from '../styles/Header.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.wrapperLayout}>
            <Head>
                <title>Welcome on my portfolio</title>
                <link rel="icon" href="katana.ico" />
            </Head>
            <div className={styles.header}>
                <img
                    className={styles.headerPic}
                    src="images/moiPicturized200.png"
                    alt="schiavone marc pic"
                />
            </div>
            <main>{children}</main>
        </div>
    )
}
