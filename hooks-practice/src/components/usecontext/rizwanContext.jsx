import { createContext } from "react";

const rizwanContext=createContext();

const RizwanProvider=({children})=>{
    const rizwanData={
        name:"Rizwan",
        age:"24",
        height:"5.6",
        color:"dark",
    }
    return <rizwanContext.Provider value={rizwanData}>{children}</rizwanContext.Provider>
}

export {rizwanContext,RizwanProvider}