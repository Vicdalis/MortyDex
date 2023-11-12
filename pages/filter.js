
import gridStyles from "../styles/GridContainer.module.css";
import Select from 'react-select';
import { useState } from "react";
import { useQuery  } from '@apollo/client';
import { GET_LOCATIONS } from './queries';

export default function Filter(props){
    const [isLoading, setIsLoading] = useState({
            status: false,
            gender: false,
            location: false
    });
    const [statusOptions] = useState([
        {value: 'alive', label: 'Alive'},
        {value: 'dead', label: 'Dead'},
        {value: 'unknown', label: 'Unknown'},
    ]);
    const [genderOptions] = useState([
        {value: 'female', label: 'Female'},
        {value: 'male', label: 'Male'},
        {value: 'genderless', label: 'Genderless'},
        {value: 'unknown', label: 'Unknown'},
    ]);
    const [locationOptions, setLocationOptions] = useState([]);
    
    let timeoutId;

    const {loading, error, data} = useQuery(GET_LOCATIONS, {
        skip: !isLoading.location, 
        variables: { page: 1 }
    });

    console.log("DATA LOCATIONS?? ", data);

    if(error){
        console.log("ERROR LOCATIONS ", error);
    }

    if(data){
        console.log("🚀 ~ file: filter.js:127 ~ Filter ~ data:", data)
        let newOptions = data.locations.results.map(x => {
            return {
                label: x.name,
                value: x.id
            }
        })
        setLocationOptions(newOptions)
        setIsLoading({...isLoading, location: false});
    }

    return (
        <div className={gridStyles.filter}>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Name" defaultValue={props.name} className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"
                    onChange={(e) => {
                        clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                            console.log("NAME CHANGED ",e)
                            props.setName(e.target.value)
                            props.reloadQuery(e.target.value);
                        }, 1000)
                    }}
                ></input>
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-40 m-1.5"
                    isLoading={isLoading.status}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Status..."
                    options={statusOptions}
                    defaultValue={props.status}
                    onChange={(e) => { 
                        console.log("STATUS CHANGED ",e)
                        let newStatus = e == null ? "" : e.value;
                        props.setStatus(newStatus);
                        props.reloadQuery(undefined, newStatus);
                    }}
                />
            </div>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Specie" defaultValue={props.specie} className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"
                    onChange={(e) => {
                        clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                            console.log("Specie ", e);
                            props.setSpecie(e.target.value)
                            props.reloadQuery(undefined,undefined,undefined,undefined, e.target.value);
                        }, 1000)
                    }}
                ></input>
            </div>
            <div className={gridStyles.text_wrap}>
                <input type="text" placeholder="Type" defaultValue={props.type} className="text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500"
                    onChange={(e) => {
                        
                        clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                            console.log("Type ", e);
                            props.setType(e.target.value)
                            props.reloadQuery(undefined,undefined,undefined,e.target.value);
                        }, 1000)
                    }}
                ></input>
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-44 m-1.5"
                    isLoading={isLoading.gender}
                    defaultValue={props.gender}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Gender..."
                    options={genderOptions}
                    onChange={(e) => { 
                        console.log("Gender CHANGED ",e)
                        let newGender = e == null ? "" : e.value;
                        props.setGender(newGender);
                        props.reloadQuery(undefined, undefined, newGender);
                    }}
                />
            </div>
            <div className={gridStyles.select_wrap}>
                <Select
                    className="focus:border-lime-500 rounded focus:outline-none mx-2 w-40 m-1.5"
                    isLoading={isLoading.location}
                    isClearable={true}
                    isSearchable={true}
                    placeholder="Location..."
                    options={locationOptions}
                    defaultValue={props.location}
                    onFocus={() => {
                        console.log("LOCATION ", props.location, " OPTIONS ", locationOptions.length)
                        if(props.location == "" && locationOptions.length == 0){
                            setIsLoading({...isLoading, location: true});
                        }
                    }}
                    onChange={(e) => { console.log("Location CHANGED ",e)}}
                />
            </div>
            {/* <button type="submit" class="flex mx-2 items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
        </div>
    );
};