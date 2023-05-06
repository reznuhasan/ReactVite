import React, { useState } from "react";

const Form=()=>{
    const [text,setText]=useState('javascript')
    const [comment,setComment]=useState("This is comment section")
    const [library,setLibrary]=useState('React')
    const [isAwesome,setAwesome]=useState(true)

    const handleChanged=(e)=>{
        console.log(e.target.type)
        if(e.target.type==='text'){
            setText(e.target.value)
        }else if(e.target.type==='textarea'){
            setComment(e.target.value)
        }
        else if(e.target.type==='select-one'){

            setLibrary(e.target.value)
        }else if(e.target.type==='checkbox'){
            setAwesome(e.target.checked)
        }     
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(text,comment,library,isAwesome)
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" onChange={handleChanged} value={text} />
            <br />
            <br />
            <textarea name="text" value={comment} onChange={handleChanged}></textarea>
            <br />
            <br />
            <select value={library} onChange={handleChanged}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
            </select>
            <br />
            <br />
            <input type="checkbox" checked={isAwesome} onChange={handleChanged}/>
            <br />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form