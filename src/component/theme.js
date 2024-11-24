import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useContext } from "react";
import { themeContext } from "../App";
export default function Theme() {
  let themeCo = useContext(themeContext);

  function changeTheme() {
    themeCo.setTheme(themeCo.theme === "light" ? "dark" : "light");
  }
  return (
    <div className="theme" onClick={changeTheme}>
      {themeCo.theme === "light" ? <NightsStayIcon /> : <LightModeIcon />}
    </div>
  );
}
