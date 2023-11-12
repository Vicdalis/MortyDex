import { useQuery  } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import gridStyles from '../styles/GridContainer.module.css';
import styles from '../styles/Home.module.css';
import Filter from './filter';
import React, { useState } from 'react';
import Pagination from './pagination';

export default function GridContainer(){
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [specie, setSpecie] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");

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
      location: location,
      setLocation: setLocation,
      reloadQuery: (newname = name, newStatus = status, newGender = gender, newType = type, newSpecie = specie) => {
        setPage(1);
        refetch({ page: page, name: newname, status: newStatus, gender: newGender, type: newType, specie: newSpecie })
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
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    console.log("DATA ENCONTRADA?? ", data);

    return (
      <React.Fragment>  
        <Filter {...filters} />
        <Pagination {...pagination} />
        <div className={styles.grid}>
          {data.characters.results.map((data, i) => {

            return (
              <a href="#" className={styles.card} key={data.id}>
                <img className={gridStyles.img} src={data.image}></img>
                <h3 className={gridStyles.name_item}>{data.name} </h3>
                <div className="text-left">
                  <p><b>Species:</b> {data.species}</p>
                  <p><b>Gender:</b> {data.gender}</p>
                  <p><b>Status:</b> {data.status}</p>
                  <p><b>Type:</b> {data.type == '' ? 'No Type' : data.type} </p>
                  <p><b>Episodes:</b> {data.episode.length}</p>
                </div>
              </a>
            )
          })}
        </div>
        <Pagination {...pagination} />
      </React.Fragment>
    );
}