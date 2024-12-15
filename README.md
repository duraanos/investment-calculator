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

## Motivation

The motivation behind developing an investment calculator app is to empower individuals to make informed financial decisions through a user-friendly financial calculator. Many users struggle with understanding the potential growth of their investments due to limited access to intuitive tools. This app bridges that gap, offering features.

## Installation

1. On GitHub.com, navigate to the main page of the repository
2. Above the list of files, click <> **Code**

![project-image1](https://github.com/user-attachments/assets/b7ef6117-bdf9-4b77-b775-41c3a494b689)

3. Copy the URL for the repository.

   - To clone the repository using HTTPS, under "HTTPS", click

   - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click

   - To clone a repository using GitHub CLI, click GitHub CLI, then click

![project-image2](https://github.com/user-attachments/assets/f3f9a9f8-32e4-4b4d-bc60-6685b1300bc7)

4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type `git clone`, and then paste the URL you copied earlier.
   ```
   https://github.com/duraanos/investment-calculator.git
   ```
7. Press **Enter** to create your local clone

   ```bash

   $ git clone https://github.com/duraanos/investment-calculator.git
   Cloning into 'investment-calculator'...
   remote: Enumerating objects: 308, done.
   remote: Counting objects: 100% (130/130), done.
   remote: Compressing objects: 100% (94/94), done.
   Rremote: Total 308 (delta 65), reused 95 (delta 32), pack-
   reused 178 (from 1)
   Receiving objects: 100% (308/308), 32.46 KiB | 443.00 KiB/s, done.
   Resolving deltas: 100% (153/153), done.
   ```

## Conclusion
The Investment Calculator project was successfully developed to provide users with a seamless and intuitive tool for calculating potential returns and managing their finances. Combining a user-friendly design with robust functionality, the app allows users to input various parameters and visualize outcomes in real time. By incorporating modern development practices and ensuring high performance, the app caters to both novice and experienced users seeking a reliable financial calculator. The app empowers users to make informed financial decisions, offering a versatile growth calculator, portfolio calculator, and return calculator. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT License

Copyright (c) 2024 Duran İzzet Koyuncu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
