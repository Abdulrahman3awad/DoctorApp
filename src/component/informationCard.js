export default function InformationCard({ userObject }) {
  let elements = [];
  for (const key in userObject.information) {
    elements.push(
      <tr>
        <td>{key} :</td>
        {key === "diseases" || key === "allergies" ? (
          <td>
            {userObject.information[key].map((e) => {
              return <span>{e}, </span>;
            })}
          </td>
        ) : (
          <td>{userObject.information[key]}</td>
        )}
      </tr>
    );
  }

  return (
    <div className="information-card">
      <h2>Information:</h2>
      <table>{elements}</table>
    </div>
  );
}
