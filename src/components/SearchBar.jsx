export default function SearchBar(props) {
  return (
    <div className='text-center mx-auto  md:max-w-[800px] '>
      <h3 className='font-bold text-2xl'>Search by name:</h3>
      <input
        type='text'
        name='inputText'
        placeholder='Please type bird name here'
        onChange={props.handleChange}
        value={props.inputText.value}
        className='my-4 w-[90%] rounded-md md:w-full'
      />
    </div>
  );
}
