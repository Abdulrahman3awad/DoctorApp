export default function VitalsCard({ VitalsData }) {
  return (
    <div className="vitals-card">
      <img
        src={`./images/` + VitalsData.title + ".png"}
        alt={VitalsData.title}
      />
      <h4>{VitalsData.title}</h4>
      <p>{VitalsData.value}</p>
    </div>
  );
}
