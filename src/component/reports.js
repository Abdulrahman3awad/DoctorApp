import DescriptionIcon from "@mui/icons-material/Description";
export default function Reports({ report }) {
  return (
    <div className="report">
      <div className="icon">
        <DescriptionIcon />
      </div>
      <div className="content">
        <h3>{report.testName}</h3>
        <p>{report.date}</p>
      </div>
    </div>
  );
}
