import styles from "./styles.module.css"

export default function ProfileSection({ children }){
    return(
        <div className={styles.wrapper}>{children}</div>
    )
}