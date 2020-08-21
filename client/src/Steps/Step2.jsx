import React, { useContext } from 'react';
import { StepContext } from '../Context';

const Step2 = () => {
  const { setStep } = useContext(StepContext);

  return (
    <div className="step step-2">
      <h2>Ти беше избран да участваш в едно събитие...</h2>
      <button onClick={setStep}>О да, искам да видя</button>
    </div>
  );
};

export default Step2;
