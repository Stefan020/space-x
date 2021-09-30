import React from 'react'
import { Card, CardMedia, Button, Typography } from '@mui/material';
import useStyles from './styles';
import defaultShip from '../images/defaultShip.jpg'
import { useHistory } from 'react-router-dom'


const MissionCard = ( mission ) => {
    const history = useHistory();
    const classes = useStyles();

    let cardData = mission.mission
    
    const handleClick = () => {
        history.push({
            pathname:`/rocket/${cardData.id}`,
            state: { cardData}
        })
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cardData.ships[0] ? cardData.ships[0].image : defaultShip }  /> 
            <div className={classes.overlay}>
            <Typography variant="h6" >{cardData.mission_name}</Typography>
            <Typography variant="h8" >{new Date(cardData.launch_date_local).toDateString()}</Typography>
            </div>
            <div className={classes.overlay2}>
            <Button variant="contained" color="primary" size="large" onClick={() => handleClick()}>details of the rocket</Button>
            </div>
        </Card>
    )
}

export default MissionCard
