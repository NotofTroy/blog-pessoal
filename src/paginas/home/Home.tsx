import './Home.css';
import { useState, useEffect } from "react";

interface minhaProps {
    title: string
    description: string
}

function Home(props:minhaProps){
    const [completed, setCompleted] = useState(false);
    const [loggedIn, setLoggedin] = useState(false);

    useEffect(() => {
        if(completed) {
            setLoggedin(true);
        }
    }, [completed])

    return (
        <>            
            <h1 className="titulo">{props.title}</h1>
            <p>{props.description}</p>

            {loggedIn ? (
                <h2>Bem-vinde de volta!</h2>
            ) : (
                <button onClick={()=> setCompleted(true)}>Fazer login</button>
            )}

            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;