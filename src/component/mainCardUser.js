import { useState } from "react";
import InputFileUpload from "./updateProfileImage";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function MainCardUser({ userObject }) {
  let [image, setImage] = useState("./images/profile.jpg");

  function changeImage(e) {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    console.log(url);
    setImage(url);
    // let fr = new FileReader();
    // fr.readAsDataURL(file);
    // fr.onload = function () {
    //   setImage(fr.result);
    // };
  }
  return (
    <div className="main-card">
      <img src={image} alt={userObject.name} />
      <div className="card-text">
        <h2>{userObject.name}</h2>
        <p>Age: {userObject.age}</p>
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <input hidden type="file" onChange={changeImage} accept="image/*" />
      </Button>
    </div>
  );
}
