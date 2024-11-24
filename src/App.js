import { createContext, useState } from "react";
import "./App.css";
import Header from "./component/header";
import Navbar from "./component/navbar";
import User from "./pages/user";
import user from "./data/user";

let themeContext = createContext();
let userDataContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState(user);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <userDataContext.Provider value={{ userData, setUserData }}>
        <div className={"App " + (theme === "light" ? "light" : "dark")}>
          <Header />
          <Navbar />
          <User />
        </div>
      </userDataContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext, userDataContext };
