import styles from '../styles/Capsule.module.css'

export default function Capsule({
    title,
    picture,
    link,
    target,
    rel,
    description,
}) {
    return (
        <>
            <a href={link} target={target} rel={rel}>
                <div className={styles.capsule}>
                    <div className={styles.left}>
                        <p>{title}</p>
                    </div>
                    <img className={styles.right} src={picture} alt={title} />{' '}
                </div>
            </a>
            <p style={{ fontSize: 20, color: 'black', marginTop: 20 }}>
                {description}
            </p>
        </>
    )
}
