import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { StepContextProvider, GuestContextProvider } from './Context';
import Steps from './Steps/Steps';
import useScroll from './hooks/useScroll';
import Guests from './Guests/Guests';

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
    <Router>
      <div>
        <StepContextProvider
          value={{
            step,
            setStep: () => setStep(step + 1),
            initialDataLoading: loading,
            confirmed,
            setConfirmed,
          }}
        >
          <GuestContextProvider
            value={{ invitations, initialLoading: initialLoading || loading }}
          >
            <Switch>
              <Route path="/guests">
                <Guests />
              </Route>
              <Route path="/">
                <Steps />
              </Route>
            </Switch>
          </GuestContextProvider>
        </StepContextProvider>
      </div>
    </Router>
  );
}

export default App;
