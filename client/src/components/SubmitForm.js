import { context } from "../context/context";
import { useState, useContext } from "react";
import { Fragment } from "react";

const SubmitForm = () => {
  const {
    globalState: { name, birthday, mail, phone },
  } = useContext(context);

  const [displayData, setDisplayData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(true);
    console.log("Hola");
  };

  return (
    <Fragment>
      <div className="row d-flex justify-content-end m-1">
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
          <div class="d-grid gap-2">
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
      <div className="row d-flex justify-content-end m-1">
        <div className="col-12 col-md-6 col-xl-4 p-0">
          {displayData && (
            <div className="bg-pink br-box my-2 p-2">
              <p className="m-0">Nombre: {name}</p>
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
