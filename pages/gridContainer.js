import { useQuery  } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import Filter from './filter';
import React, { useState } from 'react';
import Pagination from './pagination';
import Loader from './loading';
import CardCharacter from './cardCharacter';


export default function GridContainer(props){
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [specie, setSpecie] = useState("");
    const [type, setType] = useState("");
    const [characters, setCharacters] = useState();

    const {loading, error, data, refetch} = useQuery(GET_CHARACTERS, {
      variables: { page: 1 }
    });
    
    const filters = {
      status: status,
      setStatus: setStatus,
      gender: gender,
      setGender: setGender,
      name: name,
      setName: setName,
      specie: specie,
      setSpecie: setSpecie,
      type: type,
      setType: setType,
      characters,
      setCharacters,
      showEpisodes: props.showEpisodes,
      reloadQuery: (newname = name, newStatus = status, newGender = gender, newType = type, newSpecie = specie) => {
        setPage(1);
        refetch({ page: page, name: newname, status: newStatus, gender: newGender, type: newType, specie: newSpecie})
      }
    };

    const pagination = {
      currentSize: data?.characters.results.length,
      totalSize: data?.characters.info.count,
      currentPage: page,
      setPage: setPage,
      totalPages: data?.characters.info.pages,
      reloadQuery: (newPage) => {
        refetch({ page: newPage })
      }
    }
    

    if (loading) {
      return <Loader />;
    }

    if (error) {
        return <p className='text-red-400 text-center mt-6'>Error: {error.message}</p>;
    }

    console.log("DATA ENCONTRADA?? ", data);

    return (
      <React.Fragment>  
        <Filter {...filters} />
        <Pagination {...pagination} />
        <CardCharacter contentCharacter={true} characters={data.characters.results} />
        <Pagination {...pagination} />
      </React.Fragment>
    );
}