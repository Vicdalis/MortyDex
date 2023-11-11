
import gridStyles from "../styles/GridContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import { global } from 'styled-jsx/css';
import { useState } from "react";

export default function Filter(){
    const [isLoading, setIsLoading] = useState({
            status: false,
            gender: false,
            location: false
    });
    const [statusOptions] = useState([
        {value: 'Alive', label: 'Alive'},
        {value: 'Dead', label: 'Dead'},
        {value: 'unknown', label: 'Unknown'},
    ]);
    const [genderOptions] = useState([
        {value: 'Female', label: 'Female'},
        {value: 'Male', label: 'Male'},
        {value: 'Genderless', label: 'Genderless'},
        {value: 'unknown', label: 'Unknown'},
    ]);
    const [locationOptions, setLocationOptions] = useState([])

    return (
        <div className={gridStyles.filter}>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Name" className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"></input>
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-40 m-1.5"
                    isLoading={isLoading.status}
                    defaultValue={''}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Status..."
                    options={statusOptions}
                    onChange={(e) => { 
                        console.log("STATUS CHANGED ",e)
                    }}
                />
            </div>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Specie" className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"></input>
            </div>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Type" className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"></input>
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-44 m-1.5"
                    isLoading={isLoading.gender}
                    defaultValue={'1'}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Gender..."
                    options={genderOptions}
                    onChange={(e) => { console.log("Gender CHANGED ",e)}}
                />
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-40 m-1.5"
                    isLoading={isLoading.location}
                    defaultValue={'1'}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Location..."
                    options={locationOptions}
                    onChange={(e) => { console.log("Location CHANGED ",e)}}
                />
            </div>
            {/* <button type="submit" class="flex mx-2 items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
        </div>
    );
};