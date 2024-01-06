import React, {useState} from 'react';
import { useQuery  } from '@apollo/client';
import { GET_ALL_EPISODES } from '../queries';
import Select from 'react-select';
import { useRouter } from 'next/router';

export default function SelectListEpisodes(props) {

    const [episodeOptions, setEpisodeOptions] = useState([{label: props.episodeName, id: props.episodeId}]);
    const [searchedText, setSearchedText] = useState('');
    const [isLoadingList, setIsLoadingList] = useState(true);
    const [defaultEpisode, setDefaultEpisode] = useState();

    let timeoutId;
    const router = useRouter()

    const {loadingList, errorList, dataList, refetch } = useQuery(GET_ALL_EPISODES, {
        variables: { page: 1 },
        notifyOnNetworkStatusChange: true,
        onCompleted(completado) {
            console.log("🚀 ~ file: selectListEpisodes.js:20 ~ onCompleted ~ isLoadingList:", isLoadingList)
            if(isLoadingList){
                console.log("🚀 ~ file: filter.js:34 ~ onCompleted ~ completado:", completado)  
                let newOptions = completado.episodes.results.map(x => {
                    return {
                        label: x.name + ' - ' + x.episode,
                        value: x.id
                    }
                })
                newOptions = [...newOptions, {label: props.episodeName, id: props.episodeId}];
                console.log("🚀 ~ file: selectListEpisodes.js:31 ~ onCompleted ~ newOptions:", newOptions)

                setEpisodeOptions(newOptions)
                setIsLoadingList(false);

                if(defaultEpisode == null){
                    let defaultEpisode = newOptions.find(x => x.id == props.episodeId);
                    console.log("🚀 ~ file: selectListEpisodes.js:35 ~ onCompleted ~ defaultEpisode:", defaultEpisode)
                    setDefaultEpisode(defaultEpisode)
                }
            }
        }
    
    });

    if(errorList){
        console.log("ERROR LOCATIONS ", errorList);
    }

    return (
        <div className="w-full ml-40">
                            <Select
                                className="focus:border-lime-500 rounded focus:outline-none mx-2 w-80 m-1.5"
                                isLoading={isLoadingList}
                                isClearable={true}
                                isSearchable={true}
                                placeholder="Episodes..."
                                options={episodeOptions}
                                value={defaultEpisode}
                                onInputChange={(e) =>{
                                    console.log("INPUT CHANGED?? ", e, ' SEARCHED ', searchedText);
                                    if(e !== searchedText){
                                        clearTimeout(timeoutId);
                                        timeoutId = setTimeout(() => {
                                            setIsLoadingList(true);
                                            refetch({page: 1, name: e})
                                            setSearchedText(e);
                                        }, 600)
                                    }
                                }}
                            
                                onChange={(e) => {
                                    console.log("CAMBIE EPISODE ", e);
                                    if(e){
                                        router.push('/episodeDetails/'+parseInt(e.value));
                                    }else{
                                        setDefaultEpisode(null)
                                    }
                                }}
                            />
        </div>
    );
}