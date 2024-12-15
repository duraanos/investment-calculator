![investment-calculator-app-ss](https://github.com/user-attachments/assets/267b3452-6dd7-4e3e-b6e2-0369d5532f4c)

# Investment Calculator Application with React.js

The Investment Calculator App is a comprehensive tool designed to simplify financial planning for users. This personal finance app enables individuals to calculate potential returns on investments by inputting variables like initial amount, interest rate, time horizon, and contribution frequency. Ideal for beginners and professionals, the app doubles as an investment tracking app, offering detailed breakdowns to help maximize wealth. Discover the best way to manage finances with this powerful financial calculator app.

## Features
- Annual return on investment value calculation
- Annual return on interest calculation
- Annual return on total interest calculation
- Annual return on invested capital calculation

## Overview
```JSX 
import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, nextValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +nextValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0!</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
```