import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
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

function EditPrescription({ keyRow, click }) {
  let userDataCo = useContext(userDataContext);
  return (
    <div className="edit-icon icon" onClick={click}>
      <EditIcon />
    </div>
  );
}
export { DeletePrescription, EditPrescription };
