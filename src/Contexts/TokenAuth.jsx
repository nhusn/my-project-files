import React, { createContext, useEffect, useState } from 'react'
export const tokenAutherisationContext = createContext()

function TokenAuth({children}) {
    const [isAuthorized,setIsAuthorized]=useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorized(true)
        }else{
            setIsAuthorized(false)
        }
    },[isAuthorized])
  return (
    <>
        <tokenAutherisationContext.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </tokenAutherisationContext.Provider>
    </>
  )
}

export default TokenAuth