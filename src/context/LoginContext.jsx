import { createContext, useContext, useState } from "react";

const LoginContext = createContext()


export const LoginContextProvider = ({children}) => {

    const [verified, setVerified] = useState(false)
    return (
        <LoginContext.Provider value={{verified, setVerified}}>
            {children}
        </LoginContext.Provider>
    )
}

export default function useLoginContext () {
    return useContext(LoginContext)
}