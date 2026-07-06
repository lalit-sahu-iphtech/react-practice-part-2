import {useRef} from "react"

export default function UseRef(){
    const inputRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef}type="text"placeholder="enter name"/>
            <button onClick={handleFocus}>click</button>
        </div>
    )
}