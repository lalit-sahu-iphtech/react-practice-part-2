// import UseCallback from "./UseCallback"




// export default function App(){
//   return(
//     <>
//     <UseCallback/>
//     </>
//   )
// }
//-----useRef----->
// import UseRef from "./UserRef"

// export default function App(){
//   return(
//     <>
//     <UseRef/>
//     </>
//   )
// }

//---useReducer------->
// import UseReducerCounter from "./useReducerCounter"
// function App() {
//   return (
//   <>
//   <UseReducerCounter/>
//   </>
//   )
// }

//import { useState } from "react";

//----useContext----->

// import { UserContext } from "./UserContext";
// import Home from "./Home"
// function App() {
//   const user = "Lalit";
//   return (
//     <UserContext.Provider value={user}>
//       <div>
//         <h1>useContext Example</h1>
//         <Home />
//       </div>
//     </UserContext.Provider>
//   );
  
// }

// 1. Theme switcher
// import { ThemeContext } from "./ThemeContext";
// import Home from "./Home";
// import "./App.css"

// function App() {
//   const[theme, setTheme] = useState("light");

//   const toggleTheme = () =>{
//     if(theme == "light"){
//       setTheme("dark");
//     }
//     if(theme == "dark"){
//       setTheme("light");
//     }
//   }
//   return (
//    <ThemeContext.Provider value={{theme, toggleTheme}}>
//     <Home />
//    </ThemeContext.Provider>
   
//   );
  
// }

// export default App

//----custom Hooks----->
// 1. useToggle
// import useToggle from "./useToggle";
// function App(){
//   const{val, toggle} = useToggle();
//   return(
//     <>
//     {val ? "ON" : "OF"}

//     <button onClick={toggle}>Toggle</button>
//     </>
//   )
// }

//2. use Counter
// import useCounter from "./useCounter";
// function App(){
//   const{count, increment, decrement} = useCounter();
//   return(
//     <>
//     <h2>Count : {count}</h2>
//     <button onClick={increment}>+1</button>
//     <br></br>
//     <button onClick={decrement}>-1</button>

//     </>
//   )
// }

//3. useFetch
// import useFetch from "./useFetch";
// function App(){
//  const users = useFetch("https://jsonplaceholder.typicode.com/users")
//   return(
//     <>
//     <h2>Users</h2>
//     {
//     users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))
//       }
   

//     </>
//   )
// }

// 4. useDebounce
import { useState } from "react";
import useDebounce from "./useDebounce";
function App(){
 const[text, setText] = useState("");
 const debounceText = useDebounce(text, 1000)
   return(
    <>
    <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="enter something.."/>
    <h2>Typing : {text}</h2>
    <h2>Debounce text : {debounceText}</h2>
    
    </>
  )
}
export default App;