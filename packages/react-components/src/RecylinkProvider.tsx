import React, {   FC, Fragment, PropsWithChildren } from 'react';
import { ModalProvider } from './Modal';
import { ToastProvider } from './Toast';
import { DayjsProvider } from './dayjs/DayjsContext';

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
]

export const RecylinkProvider = combineProviders(...providers);