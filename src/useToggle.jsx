import { useState } from "react";

export default function useToggle(){
    const[val, setVal] = useState(false);

    const toggle = () =>{
        setVal(!val);
    }
    return {
        val,
        toggle
    }
}
