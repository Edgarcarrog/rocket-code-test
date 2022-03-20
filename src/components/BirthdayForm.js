import { context } from "../context/context";
import { useState, useContext } from "react";

const BirthdayForm = (props) => {
  const { globalState, setGlobalState } = useContext(context);

  const [userData, setUserData] = useState({
    dia: "",
    mes: "",
    año: "",
  });

  const [displayData, setDisplayData] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = async (e) => {
    if (
      e.key === "Enter" &&
      userData.dia.trim() &&
      userData.mes.trim() &&
      userData.año.trim()
    ) {
      const { dia, mes, año } = userData;
      setDisplayData(true);
      setGlobalState({
        ...globalState,
        birthday: `${dia} ${mes} ${año}`,
        isBirthdayCompleted: true,
      });
    }
  };

  return (
    <div className="row d-flex justify-content-center m-1">
      <div className="col-2 col-md-3 col-xl-4">
        <p className="paragraph my-3">Pic</p>
      </div>
      <div className="col-10 col-md-6 col-xl-4 p-0">
        <div className="bg-gray-light br-box my-2 p-2">
          <p className="paragraph mx-0 my-3">
            ¿Cuál es tu fecha de nacimiento?
          </p>
          <form>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="dia"
                name="dia"
                autoFocus
                placeholder="Día"
                min="1"
                max="31"
                step="1"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="mes"
                name="mes"
                placeholder="Mes"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="año"
                name="año"
                placeholder="Año"
                min="1"
                max="2030"
                step="1"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              ></input>
            </div>
          </form>
        </div>
        {displayData && (
          <div className="bg-pink br-box my-2 p-2">
            <p className="m-0">
              {userData.dia} {userData.mes} {userData.año}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayForm;
