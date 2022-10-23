import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ModalImageGallery from "./ModalImageGallery";
import ModalToolbar from "./ModalToolbar";
import ModalDescription from "./ModalDescription";

export default function Modal(props) {
  // Close modal and reset audio
  const closeModal = () => {
    props.setModalIsOpen(false);
    if (audioIsPlaying) {
      birdCall.pause();
      birdCall.currentTime = 0;
    }
  };

  // Data from json
  const photoGallery = props.data.photo;

  // State
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [birdCall] = useState(new Audio(props.data.audio));

  // Handling Clicks (photos, audio)

  const handleToolbarClick = (event) => {
    const { id } = event.currentTarget;
    if (id === "leftArrow") {
      currentPhotoIndex === 0
        ? setCurrentPhotoIndex(photoGallery.length - 1)
        : setCurrentPhotoIndex((prevState) => prevState - 1);
    } else if (id === "rightArrow") {
      currentPhotoIndex === photoGallery.length - 1
        ? setCurrentPhotoIndex(0)
        : setCurrentPhotoIndex((prevState) => prevState + 1);
    } else if (id === "audioButton") {
      setAudioIsPlaying((prevState) => !prevState);
      if (!audioIsPlaying) {
        birdCall.play();
      } else {
        birdCall.pause();
        birdCall.currentTime = 0;
      }
    }
  };

  return (
    //Background
    <div className='fixed w-[100%] h-[100%] overflow-auto bg-slate-600/80 z-10 flex justify-center items-center'>
      {/* Content container */}
      <div className='fixed bg-white p-5 rounded-xl max-h-[90%] w-[90%] shadow-md md:max-w-[600px] overflow-y-auto scrollbar-hide'>
        <div className='flex flex-col justify-center items-center text-center'>
          {/* Bird Name */}
          <h3 className=' text-3xl my-1'>{props.data.name}</h3>
          <ModalImageGallery
            photoGallery={photoGallery}
            currentPhotoIndex={currentPhotoIndex}
          />
          {/* Arrows buttons and Audio */}
          <ModalToolbar
            handleToolbarClick={handleToolbarClick}
            audioIsPlaying={audioIsPlaying}
            data={props.data}
            birdCall={birdCall}
          />
          {/* Description */}
          <ModalDescription data={props.data} />
          {/* Close button */}
          <button
            className='absolute top-0 right-0 mx-2 my-1 px-1 text-3xl  rounded-md'
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
}
