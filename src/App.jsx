import UseCallback from "./UseCallback"

export default function App(){
  return(
    <>
    <UseCallback/>
    </>
  )
}
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
