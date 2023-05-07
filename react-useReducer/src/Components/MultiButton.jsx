
const MultiButton=({dispatch,children})=>{
    
    return(
        <div>
            <button type="button" onClick={()=>dispatch('multipication')}>{children}</button>
        </div>
    )
}

export default MultiButton;