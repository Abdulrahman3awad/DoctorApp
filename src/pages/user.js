import InformationCard from "../component/informationCard";
import MainCardUser from "../component/mainCardUser";
import PrescriptionCard from "../component/Prescription";
import Reports from "../component/reports";
import VitalsCard from "../component/vitalsCard";
import user from "../data/user";

export default function User() {
  return (
    <div className="user-page">
      <div className="user-page__left">
        <MainCardUser userObject={user} />
        <InformationCard userObject={user} />
      </div>
      <div className="user-page__right">
        <div className="vitals">
          {user.vitals.map((obj, index) => (
            <VitalsCard key={index} VitalsData={obj} />
          ))}
        </div>
        <div className="reports">
          <h2 className="title">Test Reports</h2>
          <div className="cards">
            {user.testReports.map((report, index) => {
              return <Reports report={report} key={index} />;
            })}
          </div>
        </div>
        <PrescriptionCard prescriptions={user.prescriptions} />
      </div>
    </div>
  );
}
