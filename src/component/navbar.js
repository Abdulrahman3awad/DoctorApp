import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
export default function Navbar() {
  let location = useLocation();
  let [locIcon, setLocIcon] = useState(null);
  let icons = useRef(null);
  const handleIconChange = (e) => {
    [...icons.current.children].forEach((link, i) => {
      link.classList.remove("check");
    });
    e.target.tagName === "A"
      ? setLocIcon(e.target)
      : setLocIcon(e.target.closest("a"));
  };
  locIcon?.classList.add("check");
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="icons" ref={icons}>
        <Link to="/user" className="icon" onClick={handleIconChange}>
          <GridViewOutlinedIcon />
        </Link>
        <Link to="/doctors" className="icon" onClick={handleIconChange}>
          <GroupOutlinedIcon />
        </Link>
        <Link to="/statistics" className="icon" onClick={handleIconChange}>
          <ShowChartOutlinedIcon />
        </Link>
        <Link to="/reports" className="icon" onClick={handleIconChange}>
          <ArticleOutlinedIcon />
        </Link>
        <Link to="/calendar" className="icon" onClick={handleIconChange}>
          <DateRangeOutlinedIcon />
        </Link>
        <Link to="/files" className="icon" onClick={handleIconChange}>
          <FolderOutlinedIcon />
        </Link>
      </div>
    </div>
  );
}
