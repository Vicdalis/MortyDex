import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination(props){

  const goBack = () =>{
    if(props.currentPage > 1){
      const newPage = props.currentPage - 1;
      props.setPage(newPage);
      props.reloadQuery(newPage)
    }
  }

  const goNext = () => {
    if(props.currentPage < props.totalSize){
      const newPage = props.currentPage + 1;
      props.setPage(newPage);
      props.reloadQuery(newPage)
    }
  }

    return (
        <div className="text-left flex w-full mt-16 justify-between" style={{paddingLeft: '8%', paddingRight: '8%'}}>
          <p className="text-lime-200">Showing <span className='font-bold text-lime-300'>{props.currentSize}</span> from <span className='font-bold text-lime-300'>{props.totalSize}</span></p>
          <div className="flex">
            <div className='w-5 cursor-pointer p-1 mr-4 border-amber-400' onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} className='text-white text-base' />
            </div>
            <p className="text-lime-200 mt-0.5"> {props.currentPage} / {props.totalPages}</p>
            <div className='w-5 cursor-pointer p-1 ml-4 border-amber-400' onClick={goNext}>
                <FontAwesomeIcon icon={faChevronRight} className='text-white text-base' />
            </div>
          </div>
        </div>
    );
}