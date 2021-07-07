// Utilisation du Hook d'état
import { useState } from "react";

const UtilisationState = () => {

    // Création d'un varible d'état (dynamique) 'msg' à l'aide du Hook 'useState'
    const [msg, setMsg] = useState('Message initial.');
    // -> Le 2e element 'setMsg' est la fonction pour mettre a jours la valeur

    const [nb, setNb] = useState(42);
    const [visible, setVisible] = useState(true);

    const actionClick = () => {
        // Mise a jours de l'etat local
        setMsg('Message modifier!')
    };

    const displayNb = () => {  
        // Mise a jours de l'etat local basé sur l'ancienne valeur de celui-ci 
        setVisible(prevVisible => !prevVisible);

        // Alternative, avec l'ecriture classique des fonctions
        // setVisible(function(prevVisible) {
        //     return !prevVisible;
        // });
    }

    return (
        <div>
            <h1>Le message est : {msg}</h1>
            <button onClick={actionClick}>Cliquer ici !!!</button>

            {visible ? (
                <h2>Le nombre est : {nb}</h2>
            ) : (
                <h2>Le nombre est caché :o</h2>
            )}
            <button onClick={displayNb}>Demo</button>
        </div>
    );
}

export default UtilisationState;