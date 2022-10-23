export default function ModalDescription(props) {
  return (
    <div className=''>
      <h3 className='text-2xl'>Description</h3>
      <p className='text-lg'>{props.data.description}</p>
    </div>
  );
}
