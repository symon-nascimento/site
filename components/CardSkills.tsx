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
        <Grid item xs={12} spacing={2}>
            {
                dataSkills.map((cards, index) => (
                    <Grid key={index} item xs={3} sx={{ display: "inline-block", padding: '4px', width: '300px'}}>
                        <CreateSkills imageName={cards.imageName} title={cards.title} text={cards.text} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CardSkiils