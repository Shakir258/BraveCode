import react from "react";
import Tailwind from "./Components/Tailwind.jsx"
import Card from "./Components/Card.jsx"
import UseState from "./Components/UseState.jsx";
import Propes from "./Components/Propess.jsx";

function App(){
  return (
  <>
  <Propes change="shakir" color="bg-blue-500"/>
  <Propes change="amaan" color="bg-red-500"/>
  </>)
}

export default App;