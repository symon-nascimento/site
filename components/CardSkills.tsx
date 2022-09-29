// Importando do Material IU
import { Grid, Typography } from "@mui/material"


// Importando componentes
import CreateSkills from "./CreateSkills"

// Importando dados
import { dataCardSkills } from '../data/cardSkills'


// Melhorando nome de varíaveis
const dataSkills = dataCardSkills


const CardSkiils = () => {
    return (
        <div style={{marginTop:'90px'}}>
        {/* Titulo dos Cards Skills */}
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center'}}>
                      Tecnologias que tenho contato diariamente
        </Typography>

         {/* Cards com Skills*/}
        <Grid container sx={{ justifyContent:"center"}}>
            {
                dataSkills.map((cards, index) => (
                    <Grid key={index} sx={{ display: "inline-block", padding: '8px', width: '300px', }}>
                        <CreateSkills imageName={cards.imageName} title={cards.title} text={cards.text} />
                    </Grid>
                ))
            }
        </Grid>
        </div>
    )
}

export default CardSkiils