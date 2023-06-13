import { createContext } from "react";

const StudentContext=createContext();

const StudentProvider=({children})=>{
    const studentData=[
        {name:"afrid",age:10,class:3},
        {name:"akash",age:16,class:10},
        {name:"arif",age:12,class:5},
        {name:"nafi",age:13,class:7},
    ]
    return <StudentContext.Provider value={studentData}>{children}</StudentContext.Provider>
}

export {StudentContext,StudentProvider};