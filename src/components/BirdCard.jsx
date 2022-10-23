export default function BirdCard(props) {
  return (
    // <div
    //   className='m-2 rounded-md relative cursor-pointer'
    //   id={props.id}
    //   onClick={props.handleClick}
    // >
    //   <div
    //     className='w-[250px] h-[250px] bg-no-repeat bg-center bg-cover rounded-md'
    //     style={{ backgroundImage: `url(${props.thumb})` }}
    //   >
    //     <div className='w-[100%] py-2 bg-black/50 absolute bottom-0 rounded-b-md'>
    //       <h3 className='text-xl text-center font-bold text-white'>
    //         {props.name}
    //       </h3>
    //     </div>
    //   </div>
    // </div>
    <div
      className='group flex flex-row max-w-[500px] max-h-[250px] w-[90%] rounded-lg shadow-md cursor-pointer hover:scale-[101%] duration-100'
      id={props.id}
      onClick={props.handleClick}
    >
      <img src={props.thumb} className='w-[50%] rounded-l-lg'></img>
      <div className='flex flex-col w-[50%] h-full m-auto p-2'>
        <h2 className='text-2xl text-center font-bold'>{props.name}</h2>
        <p className='text-center text-xs mt-2 text-neutral-500 group-hover:underline'>{`${props.description.slice(
          0,
          75
        )}...`}</p>
      </div>
    </div>
  );
}
