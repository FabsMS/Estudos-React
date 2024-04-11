import styles from "./styles.module.css"
import Button from "../Button"

export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt="Avatar Profile" />
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.bio}>{bio}</p>
            <p className={styles.phone}>{phone}</p>
            <p className={styles.email}>{email}</p>
            <Button buttonText={githubUrl}/>
            <Button buttonText={linkedinUrl}/>
            <Button buttonText={twitterUrl}/>
        </div>
    )
}