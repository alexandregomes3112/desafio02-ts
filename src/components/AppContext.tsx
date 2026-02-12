import { createContext, useEffect, useState } from "react";
import {  getAllLocalStorage } from "../services/storage";

interface IAppContext {
    user: string, 
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
export const AppContext = createContext({} as IAppContext);
  
export const AppContextProvider = ({children}: any) => {
  const user = "John Smith";
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const storage = getAllLocalStorage()
    if (storage) {
      try {
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      } catch {
        // ignore invalid storage
      }
    }
  }, [])
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      { children }
    </AppContext.Provider>
  )
}