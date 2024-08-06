import './Home.css';
import { useState, useEffect } from "react";

interface minhaProps {
    title: string
    description: string
}

function Home(props:minhaProps){
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState("");

    useEffect(() => {
        if(completed) {
            setTarefa("Parabéns! Você concluiu a tarefa!")
        }
    }, [completed])

    return (
        <>            
            <h1 className="titulo">{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={()=> setCompleted(true)}>Concluir tarefa</button>
            <h3>{tarefa}</h3>

            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;