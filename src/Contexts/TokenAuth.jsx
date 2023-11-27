import React, { createContext, useState } from 'react'
export const tokenAutherisationContext = createContext()

function TokenAuth({children}) {
    const [isAuthorized,setIsAuthorized]=useState(false)
  return (
    <>
        <tokenAutherisationContext.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </tokenAutherisationContext.Provider>
    </>
  )
}

export default TokenAuth