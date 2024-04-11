import { Fragment } from "react"
import profileImage from "./assets/messi.png"
import Profile from "./components/Profile"

export default function app(){
    return(
        <Fragment className="app">
            <Profile 
                avatar={profileImage}
                name="Lionel Messi"
                bio="Jogador de Futebol - 8x Bola de Ouro"
                email="lionelmessi@email.com"
                phone="+54 XXXX-XXXX"
                githubUrl="GitHub"
                linkedinUrl="LinkedIn"
                twitterUrl="Twitter"
            />
        </Fragment>
    )
}