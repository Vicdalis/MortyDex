
import React from 'react';
import { useQuery  } from '@apollo/client';
import { GET_EPISODE } from '../queries';
import Loader from '../loading';
import CardCharacter from '../cardCharacter';
import SelectListEpisodes from '../selectListEpisodes/selectListEpisodes';

export default function ContentEpisodeDetail(props){

    const {loading, error, data } = useQuery(GET_EPISODE, {
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
            {
                data?.episode && (
                    <React.Fragment>
                        <h2 className='text-white text-4xl mt-2 mb-2'>{data.episode.name} - {data.episode.episode}</h2>
                        <p className='text-lime-200 text-xl'>Air Date: <span className='text-white'>{data.episode.air_date}</span></p>
                        <p className='my-12 text-lime-300 text-2xl'> Characters ({data.episode.characters.length})</p>
                        <SelectListEpisodes episodeName={data.episode.name + ' - ' + data.episode.episode} episodeId={data.episode.id} />
                        <CardCharacter contentCharacter={false} characters={data.episode.characters} />
                    </React.Fragment>
                )
            }
            
        </React.Fragment>
    )
}