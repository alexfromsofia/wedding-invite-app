import React, { useContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import { GuestContext } from '../Context';
import useGuest from '../hooks/useGuest';
import Loader from '../Loader';

function Steps() {
  const { invitations } = useContext(GuestContext);
  const { guest, loading } = useGuest(invitations);

  if (loading) {
    return <Loader />;
  }

  if (!guest) {
    return <div className="not-invited">Накъде така...Не си поканен.</div>;
  }

  return (
    <div className="container">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
  );
}

export default Steps;
