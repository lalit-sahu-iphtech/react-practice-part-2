import React from "react"
 function Child({onClick}){
    console.log("child render")

    return(
        <div>
            <h2>child component</h2>
            <button onClick={onClick}>child button</button>
        </div>
    )
}
export default React.memo(Child)