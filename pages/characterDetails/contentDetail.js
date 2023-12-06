import { useQuery  } from '@apollo/client';
import { GET_CHARACTER } from '../queries';
import Loader from '../loading';
import React from 'react';
import detailStyles from '../../styles/DetailCharacter.module.css';

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
                <div className='mt-8'>
                    <div className={detailStyles.imageContainer}>
                        <img className='rounded-full w-96' src={data.character.image}></img>
                    </div>
                    <h3 className={detailStyles.name_item}>{data.character.name} </h3>
                    <div className='flex text-center justify-center'>
                        <p className='text-lime-200 font-bold text-xl mr-2'>Status: </p>
                        <p className='text-white font-bold text-xl'>{data.character.status}</p>
                    </div>
                </div>
                :
                <p className='text-white text-center font-bold text-2xl py-2'> No Character found</p>
            }

        </React.Fragment>
    )
}