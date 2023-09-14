import React, {createContext} from "react"
import {DayjsContextInterface} from "./DayjsContextInterface"
import {dayjs, setDayjs} from "./dayjs"

let DayjsContext
const {Provider} = (DayjsContext = createContext<DayjsContextInterface>({} as any))

const DayjsProvider = ({children}) => {
  return (
    <Provider value={{setDayjs, dayjs}}>
      {children}
    </Provider>
  )
}

export {DayjsContext, DayjsProvider}
