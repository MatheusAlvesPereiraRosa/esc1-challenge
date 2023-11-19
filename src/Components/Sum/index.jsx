import React, { useState } from "react";
import "./index.css";

const SumCalculator = () => {
  const [number, setNumber] = useState("0");
  const [oldNumber, setOldNumber] = useState("")
  const [sum, setSum] = useState(null);

  //Função para calcular a soma dos números divísiveis por 3 ou 5 inferiores ao número oferecido
  const calculateSum = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num > 0) {
      let result = 0;
      for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          result += i;
        }
      }
      setOldNumber(num)
      setSum(result);
    } else {
      setSum(null);
    }
  };

  return (
    <div className="sum-container">
      <div className="number-container">
        <h3 className="sum-label">Digite um número inteiro positivo:</h3>
        <div className="number-container_sub">
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/\D/, ""))}
            className="input"
          />
          <button onClick={calculateSum} className="button">
            Calculate Sum
          </button>
        </div>
      </div>
      {sum !== null && (
        <div className="result">
          <p>
            O somatório dos números divísiveis por 3 ou 5 inferiores à {oldNumber} é igual a {" "}
          </p>
          <span>{sum}</span>
        </div>
      )}
    </div>
  );
};

export default SumCalculator;
