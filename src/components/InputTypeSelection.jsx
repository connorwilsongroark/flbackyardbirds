export default function InputTypeSelection(props) {
  return (
    <div className='text-center my-4 mx-auto max-w-[1200px]'>
      {/* <h2 className='font-bold text-2xl'>FL Backyard Birds</h2> */}
      <p className='w-[90%] m-auto'>
        Have you seen a bird in your backyard that you can't seem to identify?
        Welcome to <b>Florida's Backyard Birds</b>!
      </p>
      <p className='w-[90%] m-auto'>
        Please use the tool below to sort through birds by name, color, or
        shape.
      </p>
      <select
        name='userInputType'
        id='userInputType'
        value={props.userInputType}
        onChange={props.handleChange}
        className='w-[90%] max-w-[800px] mt-4 rounded-md'
      >
        <option value=''>--- Choose ---</option>
        <option value='name'>Name</option>
        <option value='color'>Color</option>
        <option value='shape'>Shape</option>
      </select>
    </div>
  );
}
