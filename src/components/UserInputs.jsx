export default function UserInputs(props) {
  const birdColors = [
    "gray",
    "black",
    "red",
    "white",
    "blue",
    "purple",
    "orange",
    "yellow",
    "green",
    "brown",
  ];
  const birdShapes = ["perching", "tree-clinging", "pigeon-like"];

  // const colorCheckboxes = birdColors.map((selectedColor) => (
  //   <div>
  //     <label htmlFor={selectedColor} className='cursor-pointer'>
  //       {selectedColor[0].toUpperCase() + selectedColor.slice(1)}
  //     </label>
  //     <input
  //       type='checkbox'
  //       name={selectedColor}
  //       key={selectedColor}
  //       id={selectedColor}
  //       onChange={props.handleChange}
  //     />
  //   </div>
  // ));

  const birdShapeRadios = birdShapes.map((shape) => (
    <div className='flex flex-col-reverse justify-center items-center'>
      <label htmlFor={shape}>{shape[0].toUpperCase() + shape.slice(1)}</label>
      <input
        type='radio'
        key={shape}
        id={shape}
        name='shape'
        value={shape}
        onChange={props.handleChange}
        className='h-10 w-10 rounded--full'
      />
    </div>
  ));

  // const birdNamesOptions = props.data.map((bird) => (
  //   <option value={bird.name} />
  // ));

  return (
    <>
      <form className='mx-auto w-[80%] grid grid-cols-1 md:w-[60%]'>
        {/* Autocomplete support (dataList)
        <datalist id='autoCompleteNames'>{birdNamesOptions}</datalist> */}
        {/* nested grid to keep on same row */}
        {/* Color Selection */}
        <h2 className='font-bold text-2xl text-center'>Color</h2>
        <p className='text-center text-lg'>
          Please check the boxes below that appear on the bird you're looking
          for.
        </p>
        <div className='grid grid-cols-2  gap-4 p-4'>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='gray' className='cursor-pointer'>
              Gray
            </label> */}
            <input
              type='checkbox'
              name='gray'
              id='gray'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-gray-400 border-gray-400 border-[3px] '
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='black' className='cursor-pointer'>
              Black
            </label> */}
            <input
              type='checkbox'
              name='black'
              id='black'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-gray-900 border-gray-900 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='red' className='cursor-pointer'>
              Red
            </label> */}
            <input
              type='checkbox'
              name='red'
              id='red'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-red-600 border-red-600 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='white' className='cursor-pointer'>
              White
            </label> */}
            <input
              type='checkbox'
              name='white'
              id='white'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-gray-100 border-gray-200 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='blue' className='cursor-pointer'>
              Blue
            </label> */}
            <input
              type='checkbox'
              name='blue'
              id='blue'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-blue-500 border-blue-500 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='purple' className='cursor-pointer'>
              Purple
            </label> */}
            <input
              type='checkbox'
              name='purple'
              id='purple'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-purple-900 border-purple-900 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='orange' className='cursor-pointer'>
              Orange
            </label> */}
            <input
              type='checkbox'
              name='orange'
              id='orange'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-orange-500 border-orange-500 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='yellow' className='cursor-pointer'>
              Yellow
            </label> */}
            <input
              type='checkbox'
              name='yellow'
              id='yellow'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-yellow-300 border-yellow-300 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='green' className='cursor-pointer'>
              Green
            </label> */}
            <input
              type='checkbox'
              name='green'
              id='green'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-green-500 border-green-500 border-[3px]'
            />
          </div>
          <div className='grid justify-center items-center'>
            {/* <label htmlFor='brown' className='cursor-pointer'>
              Brown
            </label> */}
            <input
              type='checkbox'
              name='brown'
              id='brown'
              onChange={props.handleChange}
              className='h-10 w-10 rounded-md text-amber-800 border-amber-800 border-[3px]'
            />
          </div>
        </div>
        {/* Shape Selection */}
        <h2 className='font-bold text-2xl text-center'>Shape</h2>
        <p className='text-center text-lg'>
          Click the button that best reflects the shape of the bird you're
          looking for.
        </p>
        <div className='flex flex-col '>{birdShapeRadios}</div>
      </form>
    </>
  );
}
