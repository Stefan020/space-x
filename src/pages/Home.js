import React, {useEffect, useState} from 'react'
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client'
import { PAST_LAUNCHES } from '../graphQL/Queries'
import MissionCard from '../card/MissionCard';

const Home = () => {
    const { error, loading, data } = useQuery(PAST_LAUNCHES)
    const[missions, setMissions] = useState([])

    useEffect(() => {
        if(data){
            setMissions(data.launchesPast)
            console.log(missions)
        }   
    }, [data])

    return (
            <Grid container alignItems="stretch" spacing={3}>
                {
                  missions && missions.map((mission) => (
                        <Grid key={mission.id} item xs={12} sm={6} md={4}>
                            <MissionCard mission={ mission } />
                        </Grid>
                    ))
                }
            </Grid>
    )
}

export default Home
