import "./App.css";
import PrimerComponente from "./Componentes/PrimerComponente";
import Peliculas from "./Componentes/Peliculas";
import ConsumirAPI from "./Componentes/ConsumirAPI";
import Cargando from "./Componentes/Cargando";

function App() {
  const loco = "Cambio desde Ryzen 7";
  const otro = "Otro cambio desde el instituto";

  return (
    <div className="App">
      <PrimerComponente nombre="Feo">
        <p>Desde el childrens del componente</p>
        {/* Lo contenido en la etiqueta es props.children */}
      </PrimerComponente>
      <PrimerComponente nombre="Horrible" />
      <Cargando texto="Cargando datos..." />
      <ConsumirAPI />
    </div>
  );
}

export default App;
