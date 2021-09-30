import {gql} from '@apollo/client'

export const PAST_LAUNCHES = gql`
    query {
        launchesPast(limit:15){
            mission_name
            id
            launch_date_local
            rocket {
                rocket_name
                rocket_type
                rocket {
                    mass{
                        kg
                    }
                    description
                    height {
                        meters
                    }
                }
            }
            ships {
                image
            }
        }
    }
`;
