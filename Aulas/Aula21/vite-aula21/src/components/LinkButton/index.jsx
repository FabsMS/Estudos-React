import styles from "./styles.module.css"

export default function LinkButton({ children, href }){
    return(
        <a className={styles.wrapper} href={href} target="_blank">{children}</a>
    )
}