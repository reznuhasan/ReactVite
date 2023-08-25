import  ReactDOM  from "react-dom/client"
import Header from "./Header.js"
const AppLayout=()=>{
    return(
        <>
        <Header/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
    
