import { useState } from 'react';

function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={event =>
              handleChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={event =>
              handleChange('annualInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Result</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={event =>
              handleChange('expectedResult', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={event => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
