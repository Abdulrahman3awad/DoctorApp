import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { PrescriptionsFormPopup } from "./popup";
import { useContext, useState } from "react";
import { userDataContext } from "../App";
import { DeletePrescription } from "./actions";

const PrescriptionCard = () => {
  let userDataCo = useContext(userDataContext);

  let [formPopup, setFormPopup] = useState(false);
  function showFormPopup() {
    !formPopup ? setFormPopup(true) : setFormPopup(false);
  }
  return (
    <div className="prescription-card">
      <Typography variant="h6" className="prescription-title">
        Prescriptions
      </Typography>
      <Button
        variant="text"
        className="add-prescription-btn"
        onClick={showFormPopup}
      >
        + Add a prescription
      </Button>

      <TableContainer component={Paper} elevation={0}>
        <Table className="prescription-table">
          <TableHead>
            <TableRow>
              <TableCell>Prescriptions</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataCo?.userData?.prescriptions
              ?.reverse()
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <span className="prescription-icon">
                      <InsertDriveFileIcon />
                    </span>
                    {row.title}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    {row.durationNum +
                      " " +
                      row.durationDes +
                      (row.durationNum > 1 ? "s" : "")}
                  </TableCell>
                  <TableCell>
                    <DeletePrescription keyRow={index} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {formPopup && <PrescriptionsFormPopup onclick={showFormPopup} />}
    </div>
  );
};

export default PrescriptionCard;
