import './index.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Grab some project 🤑",
];

function App() {
  const [step, setStep] = useState(1); 
  const [warningMessage, setWarningMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true); 
  const Stepdec = () => {
    if (step > 1) {
      setStep(step - 1); 
    } else {
      setWarningMessage("");
      alert("Step cannot be less than 1");
    }
  };

  const Stepinc = () => {
    if (step < messages.length) {
      setStep(step + 1);
    } else {
      setWarningMessage(" ");
      alert("Limit reached"); 
    }
  };

  return (
    <div>
      <button 
        className='close' 
        onClick={() => setIsOpen(!isOpen)} 
      >
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
            <div className={`${step === 4 ? "active" : ""}`}>4</div>
          </div>
          <p className='message'>
            Step: {step} {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button 
              onClick={Stepdec} 
              style={{ backgroundColor: "#7050f2", color: "white" }}
            >
              Previous
            </button>
            <button 
              onClick={Stepinc} 
              style={{ backgroundColor: "#7050f2", color: "white" }}
            >
              Next
            </button>
            <button 
              className={step === messages.length ? "active" : ""}
              style={{ backgroundColor: step === 4 ? "green" : "grey", color: "white" }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
