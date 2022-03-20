import { context } from "../context/context";
import { useState, useContext } from "react";
import { Fragment } from "react";
import clienteAxios from "../config/axios";

const SubmitForm = () => {
  const { globalState } = useContext(context);
  const {
    name,
    secondname,
    firstlastname,
    secondlastname,
    birthday,
    mail,
    phone,
  } = globalState;

  const [displayData, setDisplayData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayData(true);
    try {
      await clienteAxios.post("/", globalState);
    } catch (error) {
      console.log(error);
    }
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("secondname", secondname);
    sessionStorage.setItem("firstlastname", firstlastname);
    sessionStorage.setItem("secondlastname", secondlastname);
    sessionStorage.setItem("birthday", birthday);
    sessionStorage.setItem("mail", mail);
    sessionStorage.setItem("phone", phone);
  };

  return (
    <Fragment>
      <div className="row d-flex justify-content-center m-1">
        <div className="col-2"></div>
        <div className="col-10 col-md-6 col-xl-4 p-0">
          <div className="bg-gray-light br-box my-2 p-2">
            <p className="mx-0 my-3">
              Si tus datos son correctos, por favor continuemos
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center px-4">
        <div className="col-12 col-xl-4 p-0">
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={handleSubmit}
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center m-1">
        <div className="col-2"></div>
        <div className="col-12 col-md-6 col-xl-4 p-0">
          {displayData && (
            <div className="bg-pink br-box my-2 p-2">
              <p className="m-0">
                Nombre: {name} {secondname} {firstlastname} {secondlastname}
              </p>
              <p className="m-0">Fecha de nacimiento: {birthday}</p>
              <p className="m-0">Correo electrónico: {mail}</p>
              <p className="m-0">Teléfono celular: {phone}</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SubmitForm;
