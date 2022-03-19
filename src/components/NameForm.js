import { useState } from "react";

const NameForm = (props) => {
  const [userData, setUserData] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
    }
    try {
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container form">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 col-xl-4 box mx-2">
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
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameForm;
