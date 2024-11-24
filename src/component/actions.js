import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import { userDataContext } from "../App";
function DeletePrescription({ keyRow }) {
  let userDataCo = useContext(userDataContext);
  let deleteItem = () => {
    console.log(userDataCo.userData.prescriptions);

    userDataCo.setUserData({
      ...userDataCo.userData,
      prescriptions: [...userDataCo?.userData?.prescriptions].filter(
        (value, i) => i !== keyRow
      ),
    });
  };
  return (
    <div className="delete-icon icon" onClick={deleteItem}>
      <DeleteForeverIcon />
    </div>
  );
}
export { DeletePrescription };
