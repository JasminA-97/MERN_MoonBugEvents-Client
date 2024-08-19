import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editResponseContext = createContext()
export const photoAddResponseContext = createContext()

function ContextAPI({children}) {
    const[addresponse,setAddresponse]=useState("")
    const[editResponse,setEditResponse]=useState("")
    const[photoAddResponse,setPhotoAddResponse]=useState("")

  return (
    <>
        <addResponseContext.Provider value={{addresponse,setAddresponse}}>
           <editResponseContext.Provider value={{editResponse,setEditResponse}}>
              <photoAddResponseContext.Provider value={{photoAddResponse,setPhotoAddResponse}}>
                {children}
              </photoAddResponseContext.Provider>
            </editResponseContext.Provider> 
        </addResponseContext.Provider>
    </>
  )
}

export default ContextAPI

