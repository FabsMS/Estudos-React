import Card from "./components/Card"
import PosterStarWars from "./assets/PosterStarWars.jpg"
import PosterEmpireStrikes from "./assets/esb-poster.jpg"
import PosterReturnJedi from "./assets/rotj-poster.jpg"

export default function app(){
  return(
    <>
      <Card title="Pôster: Star Wars (1977)" posterImage={PosterStarWars} textImage="Pôster Star Wars"/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImage={PosterEmpireStrikes} textImage="Pôster Empire Strikes Back"/>
      <Card title="Pôster: Return od the Jedi (1983)" posterImage={PosterReturnJedi} textImage="Pôster Return od the Jedi"/>
    </>
  )
}