import { context } from "../context/context";
import { useState, useContext } from "react";

const NameForm = () => {
  const { globalState, setGlobalState } = useContext(context);

  const [userData, setUserData] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });

  const [displayData, setDisplayData] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = async (e) => {
    if (
      e.key === "Enter" &&
      userData.nombre.trim() &&
      userData.apellidoPaterno.trim() &&
      userData.apellidoMaterno.trim()
    ) {
      const { nombre, segundoNombre, apellidoPaterno, apellidoMaterno } =
        userData;
      setDisplayData(true);
      setGlobalState({
        ...globalState,
        name: nombre,
        secondname: segundoNombre,
        firstlastname: apellidoPaterno,
        secondlastname: apellidoMaterno,
        isNameCompleted: true,
      });
    }
  };

  return (
    <div className="row d-flex justify-content-center m-1">
      <div className="col-2">
        <p className="paragraph my-3">Pic</p>
      </div>
      <div className="col-10 col-md-6 col-xl-4 p-0">
        <div className="bg-gray-light br-box my-2 p-2">
          <p className="paragraph mx-0 my-3">¿Cuál es tu nombre?</p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                autoFocus
                placeholder="Nombre"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="segundoNombre"
                name="segundoNombre"
                placeholder="Segundo nombre"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="apellidoPaterno"
                name="apellidoPaterno"
                placeholder="Apellido paterno"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="apellidoMaterno"
                name="apellidoMaterno"
                placeholder="Apellido materno"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              ></input>
            </div>
          </form>
        </div>
        {displayData && (
          <div className="bg-pink br-box my-2 p-2">
            <p className="m-0">
              {userData.nombre} {userData.segundoNombre}{" "}
              {userData.apellidoPaterno} {userData.apellidoMaterno}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameForm;
