import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="icons">
        <div className="icon">
          <GridViewOutlinedIcon />
        </div>
        <div className="icon">
          <GroupOutlinedIcon />
        </div>
        <div className="icon">
          <ShowChartOutlinedIcon />
        </div>
        <div className="icon">
          <ArticleOutlinedIcon />
        </div>
        <div className="icon">
          <DateRangeOutlinedIcon />
        </div>
        <div className="icon">
          <FolderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
