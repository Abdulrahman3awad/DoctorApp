import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Theme from "./theme";
import ProfileBtn from "./profileBtn";
import { useContext, useState } from "react";
import { themeContext } from "../App";
import { ProfilePopup } from "./popup";

export default function Header() {
  let themeCo = useContext(themeContext);
  let [profilePop, setProfilePop] = useState(false);
  function showProfilePopup() {
    !profilePop ? setProfilePop(true) : setProfilePop(false);
  }
  return (
    <div className={"header " + (themeCo.theme === "light" ? "light" : "dark")}>
      <div className="header_logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="back">
        <ArrowBackOutlinedIcon />
        <p>Back</p>
      </div>
      <div className="right-part">
        <Theme />
        <ProfileBtn onClick={showProfilePopup} />
      </div>
      {profilePop && <ProfilePopup onclick={showProfilePopup} />}
    </div>
  );
}
