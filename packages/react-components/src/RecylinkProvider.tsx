import React, { FC, Fragment, ReactNode } from 'react';
import { ModalProvider } from './Modal/modalContext';
import { ToastProvider } from './Toast/toastContext';
import { DayjsProvider } from './dayjs/dayjsContext';
import { WorkersProvider } from './Workers/workersContext';

type CurrentComponentProps = {
  children: ReactNode
}

const combineProviders = (...components: (FC<CurrentComponentProps>)[]): FC<CurrentComponentProps> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: CurrentComponentProps): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: CurrentComponentProps)  => <Fragment>{children}</Fragment>,
  );
};



const providers = [
  DayjsProvider,
  ModalProvider,
  ToastProvider,
  WorkersProvider
]

export const RecylinkProvider = combineProviders(...providers);