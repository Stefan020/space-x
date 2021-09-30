import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Container, Typography } from '@mui/material';

const Rocket = () => {
    const location = useLocation()
    const[rocket, setRocket] = useState({})

    useEffect(() => {

        if(location.state.cardData){
            setRocket(location.state.cardData.rocket)
        }

    },[location.state.cardData.rocket])

    return (
        <Container>  
            <Typography variant="h3" >Rocket name: {rocket && rocket.rocket_name}</Typography>
            <Typography variant="h4" >Rocket type: {rocket &&rocket.rocket_type}</Typography>
            <Typography variant="h5">Rocket mass:{rocket.rocket && rocket.rocket.mass.kg}kg </Typography>
            <Typography variant="h5">Rocket height: {rocket.rocket && rocket.rocket.height.meters}meters </Typography>
            <Typography>{rocket.rocket && rocket.rocket.description}</Typography>
        </Container>
    )
}

export default Rocket
