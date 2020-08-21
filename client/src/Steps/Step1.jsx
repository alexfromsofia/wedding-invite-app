import React, { useContext } from 'react';
import { StepContext, GuestContext } from '../Context';
import useGuest from '../hooks/useGuest';

const Step1 = () => {
  const { setStep } = useContext(StepContext);
  const { invitations } = useContext(GuestContext);
  const { guest } = useGuest(invitations);

  return (
    <div className="step step-1 visible">
      <h2>Здравей, {guest?.name}</h2>
      <button onClick={setStep}>wanna play a game?</button>
    </div>
  );
};

export default Step1;
