import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Importando Tipos
import { CardSkillsProps } from '../types/typesCardSkills';


const CreateSkills = ({imageName, title, text }: CardSkillsProps) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={imageName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                      {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                      {text}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button  size="small">Ler mais</Button>
            </CardActions>
        </Card>
    )
}

export default CreateSkills