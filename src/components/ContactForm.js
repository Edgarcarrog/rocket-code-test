import { useState } from "react";

const ContactForm = (props) => {
  const [userData, setUserData] = useState({
    mail: "",
    telefono: "",
  });

  const [charging, setCharging] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
    }
    try {
      setCharging(true);
    } catch (error) {
      console.log(error.response);
      setCharging(false);
    }
  };

  return (
    <div className="container form">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 col-xl-4 box mx-2">
          <p className="paragraph mx-0 my-3">Datos de Contacto</p>
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
                type="text"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Teléfono celular"
                onChange={handleChange}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
