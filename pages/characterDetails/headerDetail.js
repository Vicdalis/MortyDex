import React from "react"
import detailStyles from '../../styles/DetailCharacter.module.css';
import styles from '../../styles/Style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';
import githubIcon from '../../assets/github.png';
import Image from 'next/image';

export default function HeaderDetail(){
    const router = useRouter()

    return (
        <React.Fragment>

            <div className="text-white inline-flex space-x-9 w-full p-2 mb-10 px-8 justify-between">
                <div className="flex cursor-pointer" onClick={() => router.back()}>
                    <div className='w-5 p-1 mr-4 border-amber-400'>
                        <FontAwesomeIcon icon={faChevronLeft} className='text-lime-300 text-base' /> 
                    </div>
                    <p className="text-base">Back</p>
                </div>
                <p ><span className="text-lime-300 text-4xl font-bold cursor-pointer" onClick={() => router.push('/')}>MortyDex</span></p>
                <a className="cursor-pointer" href="https://github.com/Vicdalis"><Image src={githubIcon} alt="Github link" height={40} /></a>

            </div>
        </React.Fragment>
    )
}