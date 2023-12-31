import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoSalvar={colaborador => novoColaborador(colaborador)}
      />
    </div>
  );
}

export default App;
