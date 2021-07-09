import { useState } from "react";
import ActionIncrement from "../action-increment/action-increment";
import ActionReset from "../action-reset/action-reset";
import Affichage from "../affichage/affichage";

const INITIAL_COUNT = 0;

const Compteur = (props) => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = (valeur) => {
        setCount(c => c + valeur);
    }

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <div>
            <Affichage contenu={count} initial={INITIAL_COUNT} />

            <ActionIncrement onAddIncr={handleIncr} />

            <ActionReset appear={count > 100} onResetAction={handleReset} />
        </div>
    );
}


export default Compteur;