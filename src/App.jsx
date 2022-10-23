import { useState } from "react";

import data from "../src/assets/birds.json";
import BirdCollection from "./components/BirdCollection";
import ColorSelector from "./components/ColorSelector";
import Header from "./components/Header";
import InputTypeSelection from "./components/InputTypeSelection";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import ShapeSelector from "./components/ShapeSelector";
import Footer from "./components/Footer";

function App() {
  const [userInputType, setUserInputType] = useState("");

  const [inputText, setInputText] = useState("");
  const [inputColors, setInputColors] = useState([]);
  const [inputShape, setInputShape] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBirdId, setSelectedBirdId] = useState("");
  const [birdArray, setBirdArray] = useState(data);

  // handleChange Function
  const handleChange = (event) => {
    const { name, type, value, id, checked } = event.target;
    if (id === "userInputType") {
      setUserInputType(value);
      setInputText("");
      setInputColors([]);
      setInputShape("");
      setBirdArray(data);
    } else if (type === "text") {
      setInputText(() => value.toLowerCase().trim());
    } else if (type === "radio") {
      setInputShape(value);
    } else if (type === "checkbox") {
      if (!checked) {
        setInputColors((prevState) =>
          prevState.filter((color) => color !== id)
        );
      } else {
        setInputColors((prevState) => [...prevState, id]);
      }
    }

    // Filtering
  };
  // For selecting which bird is being clicked
  const handleClick = (event) => {
    setModalIsOpen(true);
    setSelectedBirdId(event.currentTarget.id);
  };
  // Filtering function

  // Rendering
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      {/* Div to contain everything but footer for styling*/}
      <div>
        {/* Logic for opening Modal */}
        {/* selectedBirdId - 1 because data begins with id 1, so id 1 = index 0 */}
        {modalIsOpen && (
          <Modal
            data={birdArray[selectedBirdId - 1]}
            setModalIsOpen={setModalIsOpen}
          />
        )}
        {/* Header */}
        <Header />

        <InputTypeSelection
          handleChange={handleChange}
          userInputType={userInputType}
        />
        {userInputType === "name" && (
          <SearchBar handleChange={handleChange} inputText={inputText} />
        )}
        {userInputType === "color" && (
          <ColorSelector
            handleChange={handleChange}
            inputColors={inputColors}
          />
        )}
        {userInputType === "shape" && (
          <ShapeSelector handleChange={handleChange} inputShape={inputShape} />
        )}
        <BirdCollection
          data={birdArray}
          userInputType={userInputType}
          inputText={inputText}
          inputColors={inputColors}
          inputShape={inputShape}
          handleClick={handleClick}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
