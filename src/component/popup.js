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

function PrescriptionsFormPopup({ onclick, elementEdit }) {
  let userDataCo = useContext(userDataContext);
  let dataEditing = elementEdit
    ? userDataCo.userData.prescriptions[elementEdit]
    : null;

  let [formPrescriptions, setFormPrescriptions] = useState({
    title: dataEditing?.title || "",
    date: dataEditing?.date || new Date().toLocaleString().split(",")[0],
    durationNum: dataEditing?.durationNum || "",
    durationDes: dataEditing?.durationDes || "",
  });
  function submitData(e) {
    setFormPrescriptions({
      ...formPrescriptions,
      [e.target.name]: e.target.value,
    });
  }
  function changeContextData() {
    if (
      !Object.values(formPrescriptions).includes(null) &&
      !Object.values(formPrescriptions).includes("")
    ) {
      userDataCo.setUserData({
        ...userDataCo.userData,
        prescriptions: [
          ...userDataCo?.userData?.prescriptions,
          formPrescriptions,
        ],
      });
      onclick();
    }
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
            value={formPrescriptions.title}
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
            value={formPrescriptions.date}
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
              value={formPrescriptions.durationNum}
            />
            <select
              className="popup-select"
              name="durationDes"
              onChange={submitData}
              value={formPrescriptions.durationDes}
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
