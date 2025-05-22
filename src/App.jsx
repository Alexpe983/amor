import "./index.css";
import MesesDiasSegundos from "./proces";
import miImagen from './beso.jpeg'
import miImagen2 from './Sentada.jpeg'
import miImagen3 from './Chamarra.jpeg'

function App() {
  return (
    <>
      <div className="w-full h-full flex-initial">
        <div className="bg-slate-800 w-screen h-14 flex items-center justify-center ">
          <h1 className="font-bold text-white text-center">
            Dias con el amor de mi vida.....
          </h1>
        </div>

<div className="w-screen h-4/5 bg-sky-950 flex flex-col items-center justify-center p-14">
  <MesesDiasSegundos />
  <div className="flex justify-center items-center mt-4"> {/* Contenedor para las imágenes */}
    <img src={miImagen} width={300} height={300} className="mx-2" alt="Imagen 1" /> {/* Añade margen si es necesario */}
    <img src={miImagen2} width={300} height={300} className="mx-2" alt="Imagen 2" /> {/* Añade margen si es necesario */}
    <img src={miImagen3} width={228} height={100} className="mx-2 " alt="Imagen 3" /> {/* Añade margen si es necesario */}
  </div>
</div>
        <div className="w-screen h-20 bg-slate-600 flex items-center justify-center ">
          <h1 className="text-white text-center font-bold">
            Hecho para el amor de mi vida Jasmin Reyes Pérez{" "}
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
