import styles from '../styles/TechSection.module.css'

export default function HoneyCombImg({ img, altCom, width }) {
    return (
        <div className={styles.iconTech}>
            <img src={img} alt={altCom} width={width} />
        </div>
    )
}
