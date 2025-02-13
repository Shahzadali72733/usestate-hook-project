import './index.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Grab some project 🚀",
];

function App() {
  const [step, setStep] = useState(1); 
  const [warningMessage, setWarningMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

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

  const Submitted = () => {
    setIsSubmitted(true); 
    setIsOpen(false); 
    alert("Are you sure you want to submit"); 
  };

  const handleHomeClick = () => {
    setIsSubmitted(false); 
    setIsOpen(true); 
    setStep(1); 
  };

  return (
    <div>
      {isSubmitted ? (
        <div className='steps'>
          <h1 style={{ color: "green" }}>Your form was submitted successfully!</h1>
          <button onClick={handleHomeClick}>Home</button>
        </div>
      ) : (
        isOpen && (
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
                onClick={Submitted}
                className={step === messages.length ? "active" : ""}
                style={{ 
                  backgroundColor: step === messages.length ? "green" : "grey", 
                  color: "white", 
                  cursor: step === messages.length ? "pointer" : "not-allowed"
                }}
                disabled={step !== messages.length}  
              >
                Submit
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
