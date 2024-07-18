import "./index.css";
import MesesDiasSegundos from "./proces";
import miImagen from './beso.jpeg'

function App() {
  return (
    <>
      <div className="w-full h-full flex-initial">
        <div className="bg-slate-800 w-screen h-14 flex items-center justify-center ">
          <h1 className="font-bold text-white text-center">
            Dias con el amor de mi vida.....
          </h1>
        </div>

        <div className="w-screen h-4/5 bg-sky-950 flex-initial p-14 items-center justify-center ">
          <MesesDiasSegundos />
          <img src={miImagen} width={300} height={300}  className=" mx-auto"/>
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
