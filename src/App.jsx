import Teoria from "./components/Teoria"

function App() {
 //aqui va la logica del componente
 const comision = 22
 const curso = 'Fullstack'

  return (
    //aqui puedo agregar un poquito de logica
    <main className="container my-3">
      {/* aqui va el maquetado del componente */}
      <h1 className="text-center">Practica de react</h1>
      {/* <Teoria comisionProps={comision} cursoProps={curso}></Teoria> */}
      <Teoria comisionProps={comision} cursoProps={curso} property={'prueba'}/>
    </main>
  )
}

export default App
