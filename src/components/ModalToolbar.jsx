import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function ModalToolbar(props) {
  return (
    <div className='flex justify-between text-2xl w-full mx-auto my-2 '>
      <button
        id='leftArrow'
        className='bg-[#a3b18a] px-4 py-2 my-1 rounded-lg hover:bg-[#bfd39d] duration-100 shadow-md'
        onClick={props.handleToolbarClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {/* Audio */}
      <button
        id='audioButton'
        className='flex justify-center items-center bg-[#a3b18a] hover:bg-[#bfd39d] w-[150px] rounded-lg duration-100 shadow-md'
        onClick={props.handleToolbarClick}
      >
        {!props.audioIsPlaying && (
          <FontAwesomeIcon icon={faPlay} className='pr-2' />
        )}
        {!props.audioIsPlaying && `Listen`}
        {props.audioIsPlaying && (
          <FontAwesomeIcon icon={faPause} className='pr-2' />
        )}
        {props.audioIsPlaying && `Stop`}
      </button>
      <button
        id='rightArrow'
        className='bg-[#a3b18a] hover:bg-[#bfd39d] px-4 py-2 my-1 rounded-lg duration-100 shadow-md'
        onClick={props.handleToolbarClick}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
