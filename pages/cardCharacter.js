import gridStyles from '../styles/GridContainer.module.css';
import styles from '../styles/Style.module.css';

import Link from 'next/link';

export default function CardCharacter (props) {
    
    return (
        <div className={styles.grid}>
          {props.characters?.map((data, i) => {

            return (
              <Link href={{ pathname: '/characterDetails/[id]', query: {id: data.id} }} className={styles.card} key={data.id}>
                <img className={gridStyles.img} src={data.image}></img>
                <h3 className={gridStyles.name_item}>{data.name} </h3>
                {
                    props.contentCharacter && ( 
                        <div className="text-left">
                            <p><b>Species:</b> {data.species}</p>
                            <p><b>Gender:</b> {data.gender}</p>
                            <p><b>Status:</b> {data.status}</p>
                            <p><b>Type:</b> {data.type == '' ? 'No Type' : data.type} </p>
                            <p><b>Episodes:</b> {data.episode.length}</p>
                        </div>
                    )
                }
              </Link>
            )
          })}
        </div>
    )
}