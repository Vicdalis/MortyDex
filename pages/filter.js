
import gridStyles from "../styles/GridContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { global } from 'styled-jsx/css';

export default function Filter(){
    return (
        <div className={gridStyles.filter}>
            <p className="font-bold text-color-red-700">Texto</p>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Status"></input>
            <input type="text" placeholder="Specie"></input>
            <input type="text" placeholder="Type"></input>
            <input type="text" placeholder="Gender"></input>
            <input type="text" placeholder="Location"></input>
            <button type="submit" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <FontAwesomeIcon icon={faEnvelope} /></button>
        </div>
    );
};