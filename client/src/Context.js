import * as React from 'react';

export const StepContext = React.createContext(null);
export const StepContextConsumer = StepContext.Consumer;
export const StepContextProvider = StepContext.Provider;

export const GuestContext = React.createContext([]);
export const GuestContextConsumer = GuestContext.Consumer;
export const GuestContextProvider = GuestContext.Provider;
