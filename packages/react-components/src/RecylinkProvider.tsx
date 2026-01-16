import React, {FC, Fragment, ReactNode} from 'react'

import {DayjsProvider} from './dayjs/dayjsContext'
import {ModalProvider} from './Modal/modalContext'
import {ToastProvider} from './Toast/toastContext'
import {WorkersProvider} from './Workers/workersContext'

type CurrentComponentProps = {
  children: ReactNode
}

const combineProviders = (
  ...components: FC<CurrentComponentProps>[]
): FC<CurrentComponentProps> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent, idx) => {
      const WrappedComponent: FC<CurrentComponentProps> = ({children}) => (
        <AccumulatedComponents>
          <CurrentComponent>{children}</CurrentComponent>
        </AccumulatedComponents>
      )
      WrappedComponent.displayName = `CombinedProvider${idx}`
      return WrappedComponent
    },
    (({children}: CurrentComponentProps) => (
      <Fragment>{children}</Fragment>
    )) as FC<CurrentComponentProps>
  )
}

const providers = [DayjsProvider, ModalProvider, ToastProvider, WorkersProvider] as const

/**
 * RecylinkProvider
 * Combines all context providers into a single provider component.
 *
 * @example
 * <RecylinkProvider>
 *   <App />
 * </RecylinkProvider>
 */
export const RecylinkProvider = combineProviders(
  ...(providers as unknown as FC<CurrentComponentProps>[])
)
