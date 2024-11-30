import { createContext, useState } from "react";
import "./App.css";
import Header from "./component/header";
import Navbar from "./component/navbar";
import User from "./pages/user";
import user from "./data/user";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Doctors from "./pages/doctors";
import Calendar from "./pages/calendar";
import Files from "./pages/files";
import Reports from "./pages/reports";
import Statistics from "./pages/statistics";

let themeContext = createContext();
let userDataContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState(user);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <userDataContext.Provider value={{ userData, setUserData }}>
        <Router basename="DoctorApp">
          <div className={"App " + (theme === "light" ? "light" : "dark")}>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/user" element={<User />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/files" element={<Files />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </div>
        </Router>
      </userDataContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext, userDataContext };
