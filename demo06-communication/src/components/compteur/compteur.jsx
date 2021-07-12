import { useState } from "react";
import ActionIncrement from "../action-increment/action-increment";
import ActionReset from "../action-reset/action-reset";
import Affichage from "../affichage/affichage";

const INITIAL_COUNT = 0;

const Compteur = (props) => {

    const [count, setCount] = useState(INITIAL_COUNT);

    // Cette fonction est utiliser avec le composant enfant 'ActionIncrement'
    const handleIncr = (incr) => {
        // La valeur 'incr' a été envoyer depuis l'enfant
        setCount(c => c + incr);
    }

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <div>
            {/* Donnée Parent vers l'enfant */}
            <Affichage contenu={count} initial={INITIAL_COUNT} />

            {/* Affectation d'une méthode, pour que le parent puisse réagir */}
            <ActionIncrement onAddIncr={handleIncr} />

            {/* Utilisation de 2 props => Parent vers enfant & Enfant vers parent */}
            <ActionReset appear={count > 100} onResetAction={handleReset} />
        </div>
    );
}


export default Compteur;