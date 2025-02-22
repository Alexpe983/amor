import { useState } from "react";
import { evaluate } from "mathjs";


function RiemannCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [n, setN] = useState("");
  const [functionStr, setFunctionStr] = useState("");
  const [leftSum, setLeftSum] = useState("");
  const [rightSum, setRightSum] = useState("");

  const calculateRiemann = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!a || !b || !n || !functionStr) {
      alert("Todos los campos son requeridos");
      return;
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numN = parseInt(n);

    if (numA >= numB) {
      alert("'a' debe ser menor que 'b'");
      return;
    }

    if (numN <= 0) {
      alert("'n' debe ser mayor que 0");
      return;
    }

    const deltaX = (numB - numA) / numN;
    let leftTotal = 0;
    let rightTotal = 0;

    for (let i = 0; i < numN; i++) {
      // Punto izquierdo
      const xLeft = numA + i * deltaX;
      try {
        leftTotal += evaluateFunction(xLeft) * deltaX;
      } catch (error) {
        alert("Error en la función para x = " + xLeft);
        return;
      }

      // Punto derecho
      const xRight = numA + (i + 1) * deltaX;
      try {
        rightTotal += evaluateFunction(xRight) * deltaX;
      } catch (error) {
        alert("Error en la función para x = " + xRight);
        return;
      }
    }

    setLeftSum(leftTotal.toFixed(4));
    setRightSum(rightTotal.toFixed(4));
  };

  const evaluateFunction = (xValue) => {
    // Solo corrige multiplicación implícita
    const processed = functionStr.replace(/(\d)(x)/gi, "$1*$2");
    return evaluate(processed, { x: xValue });
  };

  return (
    <div className="container">
      <h1>Calculadora de Sumas de Riemann</h1>
      <form onSubmit={calculateRiemann}>
        <div className="input-group">
          <label>Función (f(x)):</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
            placeholder="Ecuacion"
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Límite inferior (a):</label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              step="any"
            />
          </div>

          <div className="input-group">
            <label>Límite superior (b):</label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              step="any"
            />
          </div>

          <div className="input-group">
            <label>Subintervalos (n):</label>
            <input
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              min="1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!a || !b || !n || !functionStr}
        >
          Calcular
        </button>
      </form>

      {leftSum && rightSum && (
        <div className="results">
          <div className="result-box">
            <h3>Suma por Izquierda</h3>
            <p>{leftSum}</p>
          </div>
          <div className="result-box">
            <h3>Suma por Derecha</h3>
            <p>{rightSum}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiemannCalculator;
