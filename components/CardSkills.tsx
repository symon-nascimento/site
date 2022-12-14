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
  
        <section id="cards">
        <div style={{marginTop:'90px'}} id='teste'>
        {/* Titulo dos Cards Skills */}
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center'}}>
                      Tecnologias que tenho contato diariamente
        </Typography>
         {/* Cards com Skills*/}
        <Grid sx={{marginLeft:'20px'}}>
            {
                dataSkills.map((cards, index) => (
                    <Grid key={index} sx={{ display: "inline-block", padding: '8px', width: '300px'}}>
                        <CreateSkills imageName={cards.imageName} title={cards.title} text={cards.text} />
                    </Grid>
                ))
            }
        </Grid>
        </div>
        </section>
       
    )
}

export default CardSkiils