import { useState } from "react";
import "./App.css"


const App = () => {
const [number, setNumber] = useState(300)
function handleAumentar(){
  setNumber(number +1)
}
  return (
    <>
      <h1 className="tienda-muebles">Mi primer contador</h1>
      <h2>Probando React con Vite y CSS</h2>
      <h2>Nota: Renji esta loco...</h2>
      <hr />
      <h1 className="tienda-muebles">Contador</h1>
      <div className="c-btn-contador">
        <button onClick={handleAumentar}  className="btn-contador">{number}</button>
      </div>
    </>
  );
};

export default App;
