
import React, {useState} from 'react';
import { useQuery  } from '@apollo/client';
import { GET_EPISODE } from '../queries';
import Layout from '../layout';
import Loader from '../loading';
import Filter from '../filter';
import CardCharacter from '../cardCharacter';

export default function ContentEpisodeDetail(props){

    const [isLoading, setIsLoading] = useState(false)

    const {loading, error, data, refetch } = useQuery(GET_EPISODE, {
        variables: { id: props.id},
    });

    if (loading) {
        return <Loader />;
    }

    if(error){
        console.log("ERROR episodes ", error);
    }

    return (
        <React.Fragment>
            {/* <Filter {...filters} /> */}
            {
                data?.episode && (
                    <React.Fragment>
                        <h2 className='text-white text-4xl mt-2 mb-2'>{data.episode.name} - {data.episode.episode}</h2>
                        <p className='text-lime-200 text-xl'>Air Date: <span className='text-white'>{data.episode.air_date}</span></p>
                        <p className='my-12 text-lime-200 text-2xl'> Characters ({data.episode.characters.length})</p>
                        <CardCharacter contentCharacter={false} characters={data.episode.characters} />
                    </React.Fragment>
                )
            }
            
        </React.Fragment>
    )
}