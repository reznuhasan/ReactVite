import { createContext } from "react";

const MyContext=createContext();

const MyProvider=({children})=>{
   const myData={
       name:"Rizwan",
       age:24
    }
    return <MyContext.Provider value={myData}>
        {children}
    </MyContext.Provider>
}

export {MyContext,MyProvider};
