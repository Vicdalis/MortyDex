import loadingLogo from '../assets/loader.gif';
import Image from 'next/image';

export default function Loader(){
    return (
        <div>
            <Image src={loadingLogo} alt="loading..." height={200} />
            <p className='text-white text-center'>Loading...</p>
        </div>
    )
}