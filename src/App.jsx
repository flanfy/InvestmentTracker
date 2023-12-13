import { useState } from "react";
import UserInput from "./components/userInput";
import Results from "./components/Results";

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputId, newValue) {
  setUserInput((prevUserInput) => {
      return {
          ...prevUserInput,
          [inputId]: +newValue //+ converts from string to number
      };
  });
}

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App
