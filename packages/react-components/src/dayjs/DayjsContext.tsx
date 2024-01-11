import React, {PropsWithChildren, createContext} from "react"
import {dayjs, setDayjs} from "./dayjs"
import {DayjsContextInterface} from "./DayjsContextInterface"

let DayjsContext: React.Context<DayjsContextInterface>;
const {Provider} = (DayjsContext = createContext<DayjsContextInterface>({} as any))

const DayjsProvider = ({children}: PropsWithChildren<any>): JSX.Element => {
  return (
    <Provider value={{setDayjs, dayjs}}>
      {children}
    </Provider>
  )
}

export {DayjsContext, DayjsProvider}
