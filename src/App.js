import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  // useEffect(() => {
  //   console.log(result);
  //   console.log(firstNumber + " " + operation + " " + secondNumber);
  // }, [result]);

  const clickNumbers = (val) => {
    if (operation === "") {
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  };
  const clickOperation = (val) => {
    setOperation(val);
  };

  const computeOperation = () => {
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
      default:
        return null;
    }
  };
  const handleClear = () => {
    setResult(0);
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  };
  return (
    <div className="App">
      <main className="calculator">
        <div className="display">
          {firstNumber + " " + operation + " " + secondNumber} {result !== 0 && " = "+result}
        </div>
        <div className="buttons">
          <section className="left-side">
            <div className="box">
              <div id="result-btn" onClick={computeOperation}>
                Compute
              </div>
              <div id="clear-btn" onClick={handleClear}>
                Clear
              </div>
            </div>
            <div className="numbers">
              {numbers.map((val, key) => {
                return (
                  <div
                    id="indiv-number"
                    onClick={() => clickNumbers(val)}
                    key={key}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="right-side">
            {operations.map((val, key) => {
              return (
                <div
                  id="operation"
                  onClick={() => clickOperation(val)}
                  key={key}
                >
                  {val}
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
