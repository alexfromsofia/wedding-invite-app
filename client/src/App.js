import React, { useState, useEffect } from 'react';
import useFetch from 'use-http';

import { StepContextProvider, GuestContextProvider } from './Context';
import Steps from './Steps/Steps';
import Loader from './Loader';
import useScroll from './hooks/useScroll';

function App() {
  const [step, setStep] = useState(1);
  const [initialLoading, setInitialLoading] = useState(true);
  const [invitations, setInvitations] = useState([]);
  const { get, response, loading, error } = useFetch('/api/v1');
  useEffect(() => {
    initializeInvitations();

    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, []);

  async function initializeInvitations() {
    const initialInvitations = await get('/invitations');
    if (response.ok) setInvitations(initialInvitations);
  }

  useScroll(step);

  return (
    <StepContextProvider
      value={{
        step,
        setStep: () => setStep(step + 1),
        initialDataLoading: loading,
      }}
    >
      <GuestContextProvider value={{ invitations }}>
        {initialLoading || loading ? <Loader /> : <Steps />}
      </GuestContextProvider>
    </StepContextProvider>
  );
}

export default App;
