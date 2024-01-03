import { useQuery  } from '@apollo/client';
import { GET_CHARACTER } from '../queries';
import Loader from '../loading';
import React from 'react';
import detailStyles from '../../styles/DetailCharacter.module.css';
import styles from '../../styles/Style.module.css';

export default function ContentDetail(props){
    const {loading, error, data} = useQuery(GET_CHARACTER, {
        variables: { id: props.id }
    });

    if (loading) {
        return <Loader />;
    }
  
    if (error) {
        return <p className='text-red-400 text-center mt-6'>Error: {error.message}</p>;
    }

    console.log("ENCONTRE USUARIO?? ", data, ' / ');

    return(
        <React.Fragment>
            {
                data?.character ?
                <div className='mt-8  grid grid-cols-3 gap-4 w-full'>
                    <div className='ml-20'>
                        <div className={detailStyles.card_focus}>
                            <div className='flex'>
                                <p className='text-lime-200 font-bold text-xl mr-2'>Species:</p>
                                <p className='text-white font-bold text-xl'>{data.character.species}</p>
                            </div>
                            <div className='flex '>
                                <p className='text-lime-200 font-bold text-xl mr-2'>Type: </p>
                                <p className='text-white font-bold text-xl'>{data.character.type}</p>
                            </div>
                            <div className='flex '>
                                <p className='text-lime-200 font-bold text-xl mr-2'>Gender: </p>
                                <p className='text-white font-bold text-xl'>{data.character.gender}</p>
                            </div>
                            <div className='flex '>
                                <p className='text-lime-200 font-bold text-xl mr-2'>Origin: </p>
                                <p className='text-white font-bold text-xl'>{data.character.origin.name}</p>
                            </div>
                            <div className='flex '>
                                <p className='text-lime-200 font-bold text-xl mr-2'>Location: </p>
                                <p className='text-white font-bold text-xl'>{data.character.location.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center justify-center'>
                        <div className={detailStyles.imageContainer}>
                            <img className='rounded-full w-96' src={data.character.image}></img>
                        </div>
                        <h3 className={detailStyles.name_item}>{data.character.name} </h3>
                        <div className='flex text-center justify-center'>
                            <p className='text-lime-200 font-bold text-xl mr-2'>Status: </p>
                            <p className='text-white font-bold text-xl'>{data.character.status}</p>
                        </div>
                    </div>
                    <div >
                        <div className='ml-2'>
                            <p className='text-lime-200 font-bold text-xl mr-2 text-center'>Featured Episodes: </p>
                            {
                                data?.character.episode && 
                                <div>
                                    {data?.character.episode.map(x => {
                                        return <p className='text-white font-bold text-xl'>{x.name}</p>
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                    
                </div>
                :
                <p className='text-white text-center font-bold text-2xl py-2'> No Character found</p>
            }

        </React.Fragment>
    )
}