import { useState } from "react";

const Contador = () => {
// const [nombreState, nombreFuncion que actualiza al state] = useState(valor inicial)
const [numero, setNumero] = useState(0)
// let numero = 0

// const incrementar = ()=>{
//     //numero++ // numero = numero +1
//     setNumero(numero + 1)
// }

    return (
        <section className="border rounded-3 text-center p-3">
            <h2>Contador</h2>
            <p className="lead">{numero}</p>
            <button className="btn btn-primary me-3" onClick={()=>setNumero(numero + 1) }>+</button>
            <button className="btn btn-danger" onClick={()=> setNumero(numero - 1)}>-</button>
        </section>
    );
};

export default Contador;