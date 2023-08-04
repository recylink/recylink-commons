import React, { ComponentProps, ComponentType, FC, Fragment, PropsWithChildren } from 'react';
import { ModalProvider } from './Modal';
import { ToastProvider } from './Toast';

type CurrentComponentProps = {
  children: React.ReactNode
}

const combineProviders = (...components: FC<CurrentComponentProps>[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: PropsWithChildren): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: PropsWithChildren)  => <Fragment>{children}</Fragment>,
  );
};



const providers = [
  ModalProvider,
  ToastProvider,
]

export const RecylinkProvider = combineProviders(...providers);