import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination(props){
    return (
        <div className="px-32 text-left flex w-full mt-16 justify-between">
          <p className="text-lime-200">Showing <span className='font-bold text-lime-300'>{props.currentSize}</span> from <span className='font-bold text-lime-300'>{props.totalSize}</span></p>
          <div className="flex">
            <div className='w-5 cursor-pointer p-1 mr-4 border-amber-400'>
                <FontAwesomeIcon icon={faChevronLeft} className='text-white text-sm' />
            </div>
            <p className="text-lime-200"> {props.currentPage} / {props.totalPages}</p>
            <div className='w-5 cursor-pointer p-1 ml-4 border-amber-400'>
                <FontAwesomeIcon icon={faChevronRight} className='text-white text-sm' />
            </div>
          </div>
        </div>
    );
}