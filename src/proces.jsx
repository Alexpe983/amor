import { useState, useEffect } from "react";

// Define fechaReferencia outside the component as it doesn't change
const fechaReferencia = new Date("2024-04-12T00:00:00"); // It's good practice to set a specific time if the start of the day is intended.

function MesesDiasSegundos() {
  const [anosTranscurridos, setAnosTranscurridos] = useState(0);
  const [mesesTranscurridos, setMesesTranscurridos] = useState(0);
  const [diasTranscurridos, setDiasTranscurridos] = useState(0);
  const [horasTranscurridas, setHorasTranscurridas] = useState(0); // Estado para horas
  const [minutosTranscurridos, setMinutosTranscurridos] = useState(0); // Estado para minutos
  const [segundosTranscurridos, setSegundosTranscurridos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaActual = new Date();
      let diferenciaMilisegundos = fechaActual.getTime() - fechaReferencia.getTime();

      if (diferenciaMilisegundos < 0) { // Handle cases where fechaReferencia is in the future
        diferenciaMilisegundos = 0;
      }

      // Constantes para cálculos de tiempo
      const milisegundosEnUnSegundo = 1000;
      const milisegundosEnUnMinuto = milisegundosEnUnSegundo * 60;
      const milisegundosEnUnaHora = milisegundosEnUnMinuto * 60;
      const milisegundosEnUnDia = milisegundosEnUnaHora * 24;
      const diasEnUnMesAprox = 30.4375; // Promedio de días en un mes
      const diasEnUnAnoAprox = 365.25; // Promedio para incluir años bisiestos

      const milisegundosEnUnMesAprox = milisegundosEnUnDia * diasEnUnMesAprox;
      const milisegundosEnUnAnoAprox = milisegundosEnUnDia * diasEnUnAnoAprox;

      // Calcular años
      const anos = Math.floor(diferenciaMilisegundos / milisegundosEnUnAnoAprox);
      let milisegundosRestantes = diferenciaMilisegundos % milisegundosEnUnAnoAprox;

      // Calcular meses
      const meses = Math.floor(milisegundosRestantes / milisegundosEnUnMesAprox);
      milisegundosRestantes %= milisegundosEnUnMesAprox;

      // Calcular días
      const dias = Math.floor(milisegundosRestantes / milisegundosEnUnDia);
      milisegundosRestantes %= milisegundosEnUnDia;

      // Calcular horas
      const horas = Math.floor(milisegundosRestantes / milisegundosEnUnaHora);
      milisegundosRestantes %= milisegundosEnUnaHora;

      // Calcular minutos
      const minutos = Math.floor(milisegundosRestantes / milisegundosEnUnMinuto);
      milisegundosRestantes %= milisegundosEnUnMinuto;

      // Calcular segundos
      const segundos = Math.floor(milisegundosRestantes / milisegundosEnUnSegundo);

      setAnosTranscurridos(anos);
      setMesesTranscurridos(meses);
      setDiasTranscurridos(dias);
      setHorasTranscurridas(horas);
      setMinutosTranscurridos(minutos);
      setSegundosTranscurridos(segundos);

    }, 1000);

    return () => clearInterval(intervalo);
  }, []); // fechaReferencia es constante y definida fuera, así que no necesita estar en las dependencias.

  return (
    <div className="flex-initial items-center justify-center">
      <h1 className=" text-center font-bold text-amber-500 ">
        HAN PASADO {anosTranscurridos} AÑO, {mesesTranscurridos} MESES, {diasTranscurridos} DÍAS,{" "}
        {horasTranscurridas} HORAS, {minutosTranscurridos} MINUTOS Y{" "}
        {segundosTranscurridos} SEGUNDOS
      </h1>
      <h1 className=" text-center font-bold text-amber-500">
        {" "}
        DESDE QUE ESTOY CON MI AMOR 
      </h1>
    </div>
  );
}

export default MesesDiasSegundos;