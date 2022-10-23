import { useState, useEffect } from "react";

export default function ColorSelector(props) {
  // All this windowsize stuff is for the 'tap' or 'click' dynamic text in the color selector.
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const birdColors = [
    {
      colorId: 1,
      colorName: "gray",
      styleColor: "text-gray-400",
      borderColor: "border-gray-400",
      bg: "bg-gray-400",
    },
    {
      colorId: 2,
      colorName: "black",
      styleColor: "text-gray-900",
      borderColor: "border-gray-900",
      bg: "bg-gray-900",
    },
    {
      colorId: 3,
      colorName: "red",
      styleColor: "text-red-600",
      borderColor: "border-red-600",
      bg: "bg-red-600",
    },
    {
      colorId: 4,
      colorName: "white",
      styleColor: "text-gray-100",
      borderColor: "border-gray-200",
      bg: "bg-gray-100",
    },
    {
      colorId: 5,
      colorName: "blue",
      styleColor: "text-blue-500",
      borderColor: "border-blue-500",
      bg: "bg-blue-500",
    },
    {
      colorId: 6,
      colorName: "purple",
      styleColor: "text-purple-900 ",
      borderColor: "border-purple-900",
      bg: "bg-purple-900",
    },
    {
      colorId: 7,
      colorName: "orange",
      styleColor: "text-orange-500 ",
      borderColor: "border-orange-500",
      bg: "bg-orange-500",
    },
    {
      colorId: 8,
      colorName: "yellow",
      styleColor: "text-yellow-300 ",
      borderColor: "border-yellow-300",
      bg: "bg-yellow-300",
    },
    {
      colorId: 9,
      colorName: "green",
      styleColor: "text-green-500",
      borderColor: "border-green-500",
      bg: "bg-green-500",
    },
    {
      colorId: 10,
      colorName: "brown",
      styleColor: "text-amber-800",
      borderColor: "border-amber-800",
      bg: "bg-amber-800",
    },
  ];
  const colorCheckboxes = birdColors.map((color) => {
    return (
      <div key={color.colorId} className='grid justify-center items-center'>
        <input
          type='checkbox'
          name='inputColors'
          id={color.colorName}
          onChange={props.handleChange}
          checked={props.inputColors.includes(color.colorName)}
          className={`h-16 w-16 rounded-md border-[3px] ${color.bg} ${color.styleColor} ${color.borderColor} shadow-lg cursor-pointer`}
        />
      </div>
    );
  });

  return (
    <div className='max-w-[90%] text-center mx-auto md:max-w-[800px]'>
      <h3 className='font-bold text-2xl'>Colors</h3>
      <p className='text-center mb-2 '>
        {`Please ${
          windowSize.innerWidth <= 800 ? "tap" : "click"
        } the checkboxes below to select any of the colors of the bird
        you saw.`}
      </p>
      <div className='grid grid-cols-4 gap-2 mx-auto'>{colorCheckboxes}</div>
    </div>
  );
}
