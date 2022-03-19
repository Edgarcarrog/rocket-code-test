import { useState } from "react";

const BirthdayForm = (props) => {
  const [userData, setUserData] = useState({
    dia: "",
    mes: "",
    año: "",
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
          <p className="paragraph mx-0 my-3">
            ¿Cuál es tu fecha de nacimiento?
          </p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="dia"
                name="dia"
                autoFocus
                placeholder="Día"
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
                type="text"
                className="form-control"
                id="año"
                name="año"
                placeholder="Año"
                onChange={handleChange}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BirthdayForm;
