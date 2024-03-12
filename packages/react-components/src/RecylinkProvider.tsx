import React, { FC, Fragment, PropsWithChildren } from 'react';
import { ModalProvider } from './Modal/modalContext';
import { ToastProvider } from './Toast/toastContext';
import { DayjsProvider } from './dayjs/dayjsContext';
import { WorkersProvider } from './Workers/workersContext';

type CurrentComponentProps = {
  children: React.ReactNode
}

const combineProviders = (...components: (FC<CurrentComponentProps>)[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: PropsWithChildren<any>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: PropsWithChildren<any>)  => <Fragment>{children}</Fragment>,
  );
};



const providers = [
  DayjsProvider,
  ModalProvider,
  ToastProvider,
  WorkersProvider
]

export const RecylinkProvider = combineProviders(...providers);