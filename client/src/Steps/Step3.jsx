import React, { useContext } from 'react';
import { StepContext } from '../Context';

const Step3 = () => {
  const { setStep } = useContext(StepContext);

  return (
    <div className="step step-3">
      <h2>За целта трябва да си свободен/а на 29 Август 2020.</h2>
      <button onClick={setStep}>Save the date!</button>
    </div>
  );
};

export default Step3;
