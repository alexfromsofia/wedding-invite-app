import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StepContextProvider, GuestContextProvider } from './Context';
import Steps from './Steps/Steps';
import Loader from './Loader';
import useScroll from './hooks/useScroll';

function App() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    initializeInvitations();

    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, []);

  async function initializeInvitations() {
    try {
      const { data } = await axios.get(
        'https://lachetoandyasi.herokuapp.com/api/v1/invitations'
      );
      setInvitations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useScroll(step);

  return (
    <StepContextProvider
      value={{
        step,
        setStep: () => setStep(step + 1),
        initialDataLoading: loading,
        confirmed,
        setConfirmed,
      }}
    >
      <GuestContextProvider value={{ invitations }}>
        {initialLoading || loading ? <Loader /> : <Steps />}
      </GuestContextProvider>
    </StepContextProvider>
  );
}

export default App;
