import { createContext} from "react";


const AppContext=createContext()
const userData={
    name:'Rizwan',
    age:24,
}
const AppProvider=({children})=>{
    return<AppContext.Provider value={userData}>
        {children}
    </AppContext.Provider>
}

export {AppContext,AppProvider}