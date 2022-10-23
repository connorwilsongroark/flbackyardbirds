export default function ModalImageGallery(props) {
  return (
    <div className='overflow-hidden rounded-lg shadow-md'>
      <img
        src={props.photoGallery[props.currentPhotoIndex]}
        alt=''
        className='hover:scale-105 duration-100'
      ></img>
    </div>
  );
}
