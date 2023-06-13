import { createContext } from "react";

const AdminContext=createContext();

const AdminProvider=({children})=>{
    const adminData={
        name:"Admin",
        email:"reznuhasan31@gmail.com",
        password:"12345678"
    }
    return<AdminContext.Provider value={adminData}>{children}</AdminContext.Provider>
}

export {AdminContext,AdminProvider};