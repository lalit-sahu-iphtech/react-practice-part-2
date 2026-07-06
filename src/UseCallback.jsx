import { useCallback, useState } from "react";
import Child from "./Child"
export default function UseCallback(){
    const[count, setCount] = useState(0);

    const handleClick = useCallback(()=>{
        alert("button clicked")
    },[]);

    return(
        <div>
          <h2>{count}</h2>
          <button onClick={()=>setCount(count+1)}>+</button>
          <Child onClick={handleClick}/>
        </div>
    )
}