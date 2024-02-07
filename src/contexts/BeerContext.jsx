import { createContext, useState } from "react";

export const BeerContext = createContext(undefined)

const BeerContextProvider = ({ children }) => {
  const [myBeers, setMyBeers] = useState([])

  return (
    <BeerContext.Provider value={{ myBeers, setMyBeers }}>
      {children}
    </BeerContext.Provider>
  )
}

export default BeerContextProvider