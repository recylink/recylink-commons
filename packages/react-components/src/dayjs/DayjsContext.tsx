import React, {createContext, PropsWithChildren} from 'react'

import {dayjs, setDayjs} from './dayjs'
import {DayjsContextProps} from './DayjsContextProps.types'

let DayjsContext: React.Context<DayjsContextProps>

const {Provider} = (DayjsContext = createContext<DayjsContextProps>({} as DayjsContextProps))

const DayjsProvider = ({children}: PropsWithChildren<DayjsContextProps>): JSX.Element => {
  return <Provider value={{setDayjs, dayjs}}>{children}</Provider>
}

export {DayjsContext, DayjsProvider}
