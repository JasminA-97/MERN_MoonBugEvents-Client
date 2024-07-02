import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()

function ContextAPI({children}) {
    const[addresponse,setAddresponse]=useState("")
  return (
    <>
        <addResponseContext.Provider value={{addresponse,setAddresponse}}>
            {children}
        </addResponseContext.Provider>
    </>
  )
}

export default ContextAPI

