import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function ProfileBtn({ onClick }) {
  return (
    <div className="profile-btn" onClick={onClick}>
      <img src="./images/profile.jpg" alt="Abdo" />
      <p>Abdulrahman Awad</p>
      <KeyboardArrowDownIcon />
    </div>
  );
}
