import { useState, useEffect } from "react";
const fechaReferencia = new Date("2024-04-12");

function MesesDiasSegundos() {
  const [mesesTranscurridos, setMesesTranscurridos] = useState(0);
  const [diasTranscurridos, setDiasTranscurridos] = useState(0);
  const [segundosTranscurridos, setSegundosTranscurridos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaActual = new Date();
      const diferenciaMilisegundos = fechaActual - fechaReferencia;
      const meses = Math.floor(
        diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 30.4375)
      ); // Aproximación de días en un mes
      const dias = Math.floor(
        (diferenciaMilisegundos % (1000 * 60 * 60 * 24 * 30.4375)) /
          (1000 * 60 * 60 * 24)
      );
      const segundos = Math.floor(
        (diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / 1000
      );
      setMesesTranscurridos(meses);
      setDiasTranscurridos(dias);
      setSegundosTranscurridos(segundos);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex-initial items-center justify-center">
      <h1 className=" text-center font-bold text-amber-500 ">
        HAN PASADO {mesesTranscurridos} MESES, {diasTranscurridos} DIAS Y{" "}
        {segundosTranscurridos} SEGUNDOS{" "}
      </h1>
      <h1 className=" text-center font-bold text-amber-500">
        {" "}
        DESDE QUE ESTOY CON EL AMOR DE VIDA
      </h1>
    </div>
  );
}

export default MesesDiasSegundos;
