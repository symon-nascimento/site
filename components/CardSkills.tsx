// Importando do Material IU
import { Grid } from "@mui/material"

// Importando componentes
import CreateSkills from "./CreateSkills"

// Importando dados
import { dataCardSkills } from '../data/cardSkills'


// Melhorando nome de varíaveis
const dataSkills = dataCardSkills

const CardSkiils = () => {
    return (
        <Grid item xs={12}>
            {
                dataSkills.map((cards, index) => (
                    <Grid key={index} sx={{ display: "inline-block", margin: '5px' }}>
                        <CreateSkills imageName={cards.imageName} title={cards.title} text={cards.text} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CardSkiils