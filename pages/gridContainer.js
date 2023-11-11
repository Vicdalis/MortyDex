import { gql, useQuery } from '@apollo/client';
import gridStyles from '../styles/GridContainer.module.css';
import styles from '../styles/Home.module.css';
import Filter from './filter';
import React from 'react';
import Pagination from './pagination';

const GET_DATA = gql`
  query {
    characters(page: 1, ) {
      info {
        count
        pages
      }
      results {
        id
        name
        species 
        image
        gender
        status
        type
        location {
          id
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

export default function GridContainer(){
    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    console.log("DATA ENCONTRADA?? ", data)

    return (
      <React.Fragment>
        <Filter />
        <Pagination currentSize={data.characters.results.length} totalSize={data.characters.info.count} currentPage="1" totalPages={data.characters.info.pages} />
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
        <Pagination currentSize={data.characters.results.length} totalSize={data.characters.info.count} currentPage="1" totalPages={data.characters.info.pages} />
      </React.Fragment>
    );
}