import { useQuery  } from '@apollo/client';
import { GET_CHARACTER } from '../queries';
import Loader from '../loading';
import React from 'react';
import detailStyles from '../../styles/DetailCharacter.module.css';
import Link from 'next/link';

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
                <div className='mt-8  grid grid-cols-3 gap-2 w-full'>
                    <div className='flex col-span-2 w-full'>
                        
                            <div className='w-2/4 ml-24 m-y-16 mt-24'>
                            {/* <div className={detailStyles.card_focus} > */}
                                <div className='flex'>
                                    <p className='text-lime-200 font-bold text-xl mr-2'>Species:</p>
                                    <p className='text-white font-bold text-xl'>{data.character.species} </p>
                                </div>
                                <div className='flex ' >
                                    <p className='text-lime-200 font-bold text-xl mr-2'>Type: </p>
                                    <p className='text-white font-bold text-xl'>{data.character.type == '' ? 'No Type' : data.character.type}</p>
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
                            <div className='text-center justify-center w-2/4'>
                                <div className={detailStyles.imageContainer}>
                                    <img className='rounded-full w-96' src={data.character.image}></img>
                                </div>
                                <h3 className={detailStyles.name_item}>{data.character.name} </h3>
                                <div className='flex text-center justify-center'>
                                    <p className='text-lime-200 font-bold text-xl mr-2'>Status: </p>
                                    <p className='text-white font-bold text-xl'>{data.character.status}</p>
                                </div>
                            </div>
                    </div>
                    <div className='ml-16'>
                        <div className='ml-2 '>
                            <p className='text-lime-200 font-bold text-xl mb-6'>Featured Episodes ({data?.character.episode ? data?.character.episode.length : 0}): </p>
                            {
                                data?.character.episode && 
                                <div >
                                    {data?.character.episode.slice(0, 15).map(x => {
                                        return (
                                            <Link href={{ pathname: '/episodeDetails/[id]', query: {id: x.id} }} key={x.id}>
                                                <p className='text-white font-bold text-xl my-1 hover:text-lime-300'>{x.name} - {x.episode}</p>
                                            </Link>
                                        )
                                    })}
                                    {data?.character.episode?.length > 15 && <p className='text-lime-200 font-bold text-xl mt-4 cursor-pointer'>See More...</p>}
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