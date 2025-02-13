import './index.css'
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);  // Initialize step state to 1 (the first step)

  // Handle click for previous button (decrease step)
  const Stepdec = () => {
    if (step > 1) {
      setStep(step - 1);  // Decrease step value
    }
  };

  // Handle click for next button (increase step)
  const Stepinc = () => {
    if (step < messages.length) {
      setStep(step + 1);  // Increase step value
    }
  };

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <p className='message'>Step: {step} {messages[step - 1]}</p>

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
      </div>
    </div>
  );
}

export default App;
