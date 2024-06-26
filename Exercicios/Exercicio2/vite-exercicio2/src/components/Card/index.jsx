import posterImg from "../../assets/PosterStarWars.jpg"
import styles from "./styles.module.css"

export default function Card(){
    return(
        <div className={styles.container}>
            <img className ={styles.poster} src={posterImg} alt="Poster Star Wars" />
            <div>
                <h1 className={styles.title}>Pôster do Filme Star Wars</h1>
                <p className={styles.text}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className={styles.button}>
                    Comprar agora
                </button>
            </div>
        </div>
    )
}