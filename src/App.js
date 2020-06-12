import React from "react";
import "./styles.css";

const IOPTIONS = ["Btech", "Bsc", "BEd", "Mtech", "MSc", "PHd"];

export default function App() {
  const [fname, setfname] = React.useState("");
  const [degree, setdegree] = React.useState("");
  const [gender, setgender] = React.useState("");
  const [allverfied, setallverfied] = React.useState(false);

  React.useEffect(() => {
    if (fname && degree && gender) setallverfied(true);
  }, [fname, degree, gender]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="row">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          value={fname}
          onChange={e => setfname(e.target.value)}
        />
      </div>

      <div className="row">
        <label htmlFor="degree">Degree</label>
        <select
          value={degree}
          id="degree"
          onChange={e => setdegree(e.target.value)}
        >
          {IOPTIONS.map((elem, index) => {
            return <option key={index}>{elem}</option>;
          })}
        </select>
      </div>

      <div className="row">
        <p>select gender</p>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={e => setgender("Male")}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          checked={gender === "Female"}
          value="Female"
          onChange={e => setgender("Female")}
        />
      </div>

      <div>
        {allverfied}
        <label htmlFor="all_verified">all verified</label>
        <input
          type="checkbox"
          id="all_verified"
          checked={allverfied === true}
          value={allverfied}
          onChange={e => setallverfied()}
        />
      </div>
    </div>
  );
}
