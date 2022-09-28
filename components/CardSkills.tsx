// Importando do Material IU
import { Grid } from "@mui/material"

// Importando componentes
import CreateSkills from "./CreateSkills"

// Importando dados
import { dataCardSkills } from '../data/cardSkills'
import { Box } from "@mui/system"


// Melhorando nome de varíaveis
const dataSkills = dataCardSkills

const CardSkiils = () => {
    return (

        <Grid container sx={{ justifyContent:"center"}}>
            {
                dataSkills.map((cards, index) => (
                    <Grid key={index} sx={{ display: "inline-block", padding: '8px', width: '300px', }}>
                        <CreateSkills imageName={cards.imageName} title={cards.title} text={cards.text} />
                    </Grid>
                ))
            }
        </Grid>

    )
}

export default CardSkiils