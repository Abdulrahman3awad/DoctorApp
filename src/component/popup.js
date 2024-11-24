import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import { userDataContext } from "../App";

function stopPropagation(e) {
  e.stopPropagation();
}
function ProfilePopup({ onclick }) {
  return (
    <div className="big-popup" onClick={onclick}>
      <div className="popup profile-popup" onClick={stopPropagation}>
        <img src="./images/profile.jpg" alt="abdo" />
        <h4>Abdulrahman Awad</h4>

        <Button variant="contained" endIcon={<LogoutIcon />}>
          logout
        </Button>
      </div>
    </div>
  );
}

function PrescriptionsFormPopup({ onclick }) {
  let userDataCo = useContext(userDataContext);

  console.log(userDataCo?.userData);
  let [formPrescriptions, setFormPrescriptions] = useState({
    title: "no title",
    date: new Date().toLocaleString().split(",")[0],
    durationNum: "-",
    durationDes: "-",
  });
  let [inputCounter, setInputCounter] = useState(0);
  function submitData(e) {
    setFormPrescriptions({
      ...formPrescriptions,
      [e.target.name]: e.target.value,
    });
    setInputCounter((inputCounter += 1));
  }
  function changeContextData() {
    console.log(userDataCo?.userData);

    (inputCounter >= 4 &&
      userDataCo.setUserData({
        ...userDataCo.userData,
        prescriptions: [
          ...userDataCo?.userData?.prescriptions,
          formPrescriptions,
        ],
      })) ||
      onclick();
  }
  return (
    <div className="big-popup" onClick={onclick}>
      <div className="popup prescriptions-form-popup" onClick={stopPropagation}>
        <h4 className="popup-title">Add Prescriptions</h4>

        <label className="popup-label">
          <h6 className="popup-label-title">Prescriptions Title</h6>
          <input
            className="popup-input"
            type="text"
            name="title"
            onChange={submitData}
            placeholder="Enter title..."
          />
        </label>

        <label className="popup-label">
          <h6 className="popup-label-title">Prescriptions Date</h6>
          <input
            className="popup-input"
            type="date"
            name="date"
            onChange={submitData}
            placeholder="Enter date..."
          />
        </label>

        <label className="popup-label">
          <h6 className="popup-label-title">Prescriptions Duration</h6>
          <div className="duration-input-group">
            <input
              className="popup-input duration-input"
              type="number"
              name="durationNum"
              onChange={submitData}
              placeholder="Enter duration..."
            />
            <select
              className="popup-select"
              name="durationDes"
              onChange={submitData}
              defaultValue="--"
            >
              <option disabled selected value="--">
                select duration
              </option>
              <option value="day">days</option>
              <option value="week">weeks</option>
              <option value="month">months</option>
              <option value="year">years</option>
            </select>
          </div>
        </label>

        <button className="popup-button" onClick={changeContextData}>
          Submit Data
        </button>
      </div>
    </div>
  );
}
export { ProfilePopup, PrescriptionsFormPopup };
