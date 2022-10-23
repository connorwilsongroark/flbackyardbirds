import { useState, useEffect } from "react";
import BirdCard from "./BirdCard";

export default function BirdCollection(props) {
  // State
  const [numOfBirds, setNumOfBirds] = useState(6);

  // See more Birds
  const loadMoreBirds = () => {
    setNumOfBirds((prevState) => prevState + 6);
  };

  // Filtering down to relevant birds
  let filterData = props.data;
  if (props.inputText) {
    filterData = props.data.filter((bird) =>
      bird.name.toLowerCase().includes(props.inputText)
    );
  } else if (props.inputShape) {
    filterData = filterData.filter((bird) => bird.type === props.inputShape);
  } else if (props.inputColors) {
    filterData = filterData.filter((bird) =>
      props.inputColors.every((color) => bird.color.includes(color))
    );
  }

  // Slice to display proper number of birds (see state)
  const birdsArray = filterData
    .slice(0, numOfBirds)
    .map((bird) => (
      <BirdCard
        key={bird.id}
        id={bird.id}
        name={bird.name}
        type={bird.type}
        color={bird.color}
        description={bird.description}
        thumb={bird.thumb}
        handleClick={props.handleClick}
      />
    ));

  // useEffect, resets numOfBirds to display default (6) when userInputType changes
  useEffect(() => {
    setNumOfBirds(6);
  }, [props.userInputType]);

  return (
    <section className='max-w-[1200px] mx-auto mt-4'>
      {filterData.length == props.data.length ? (
        <h2 className='text-2xl text-center underline mb-3'>Birds</h2>
      ) : (
        <h2 className='text-2xl text-center underline mb-3'>Results</h2>
      )}
      {/* <div className='grid place-items-center md:grid-cols-2 gap-2'>
        {birdsArray.length > 0 ? (
          birdsArray
        ) : (
          <div className=''>
            <h3 className='text-3xl mt-5 text-center'>No results!</h3>
            <p className='text-xl text-center w-[90%] my-2 mx-auto'>
              Please refine your search criteria and try again.
            </p>
          </div>
        )}
      </div> */}
      {birdsArray.length > 0 ? (
        <div className='grid place-items-center md:grid-cols-2 gap-2'>
          {birdsArray}
        </div>
      ) : (
        <div>
          <h3 className='text-3xl mt-5 text-center'>No results!</h3>
          <p className='text-xl text-center w-[90%] my-2 mx-auto'>
            Please refine your search criteria and try again.
          </p>
        </div>
      )}
      <div className='flex justify-center items-center mt-2'>
        {numOfBirds < filterData.length && (
          <button
            className='flex justify-center items-center text-xl font-bold max-w-[500px] w-[90%] h-6 bg-[#a3b18a] hover:bg-[#bfd39d] duration-100 m-2 p-7 rounded-md shadow-md'
            onClick={loadMoreBirds}
          >
            Show more birds
          </button>
        )}
      </div>
    </section>
  );
}
