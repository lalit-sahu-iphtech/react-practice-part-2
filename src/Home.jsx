// import { UserContext } from "./UserContext"
// import { useContext } from "react";

// export default function Home(){
//     const user = useContext(UserContext);

//     return(
//         <div>
//             <h1>welcome {user}</h1>
//         </div>
//     )
// }


//----Theme switcher----->
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
export default function Home(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={theme}>
          <h1>Theme Switcher</h1>
    
          <h2>Current Theme: {theme}</h2>
    
          <button onClick={toggleTheme}>
            Change Theme
          </button>
        </div>
      );
}