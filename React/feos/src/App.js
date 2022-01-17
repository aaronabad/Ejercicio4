import "./App.css";
import PrimerComponente from "./Componentes/PrimerComponente";
import Peliculas from "./Componentes/Peliculas";
import ConsumirAPI from "./Componentes/ConsumirAPI";
import Cargando from "./Componentes/Cargando";
import Reloj from "./Componentes/Reloj";
import Contador from "./Componentes/Contador";

function App() {
  return (
    <div className="App">
      <Contador />
      <PrimerComponente nombre="Feo">
        <p>Desde el childrens del componente</p>
        {/* Lo contenido en la etiqueta es props.children */}
      </PrimerComponente>
      <PrimerComponente nombre="Horrible" />
      <Cargando texto="Cargando datos..." />
      <Reloj />
      <ConsumirAPI />
    </div>
  );
}

export default App;
