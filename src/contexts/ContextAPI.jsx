import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editResponseContext = createContext()

function ContextAPI({children}) {
    const[addresponse,setAddresponse]=useState("")
    const[editResponse,setEditResponse]=useState("")

  return (
    <>
        <addResponseContext.Provider value={{addresponse,setAddresponse}}>
           <editResponseContext.Provider value={{editResponse,setEditResponse}}>
                {children}
            </editResponseContext.Provider> 
        </addResponseContext.Provider>
    </>
  )
}

export default ContextAPI

