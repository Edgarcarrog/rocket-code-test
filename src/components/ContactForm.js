import { context } from "../context/context";
import { useState, useContext } from "react";

const ContactForm = (props) => {

  const { globalState, setGlobalState } = useContext(context);
  
  const [userData, setUserData] = useState({
    mail: "",
    telefono: "",
  });

  const [displayData, setDisplayData] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && userData.mail.trim() && userData.telefono.trim()) {
      setDisplayData(true);
    }
  };

  return (
    <div className="row d-flex justify-content-center m-1">
      <div className="col-2 col-md-3 col-xl-4">
        <p className="paragraph my-3">Pic</p>
      </div>
      <div className="col-10 col-md-6 col-xl-4 p-0">
        <div className="bg-gray-light br-box my-2 p-2">
          <p className="paragraph my-3">Datos de Contacto</p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="mail"
                name="mail"
                autoFocus
                placeholder="Correo electrónico"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Teléfono celular"
                min="1"
                max="9999999999999"
                step="1"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              ></input>
            </div>
          </form>
        </div>
        {displayData && (
          <div className="bg-pink br-box my-2 p-2">
            <p className="m-0">Correo electrónico: {userData.mail}</p>
            <p className="m-0">Teléfono celular: {userData.telefono}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
