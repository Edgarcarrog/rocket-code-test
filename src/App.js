import { context } from "./context/context";
import { useContext } from "react";
import BirthdayForm from "./components/BirthdayForm";
import ContactForm from "./components/ContactForm";
import NameForm from "./components/NameForm";

function App() {
  const {
    globalState: { isNameCompleted, isBirthdayCompleted, isContactCompleted },
  } = useContext(context);

  return (
    <div className="App">
      <div className="container">
        <NameForm />
        {isNameCompleted && <BirthdayForm />}
        {isBirthdayCompleted && <ContactForm />}
      </div>
    </div>
  );
}

export default App;
