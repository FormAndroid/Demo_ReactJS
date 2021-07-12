import PropTypes from 'prop-types';
import { useState } from 'react';

const ActionIncrement = (props) => {
    // Les props du composant utilise 'onAddIncr' en tant qu'evenement

    const [incr, setIncr] = useState('1');

    const handleClick = () => {
        console.log('Ajout de l\'increment');

        // Création d'une variable avec ce qu'on souhaite envoyer au parent
        const v = ( incr !== '' && !isNaN(incr)) ? parseInt(incr) : 1;

        // Déclanche le code "lier" de la méthode du parent depuis l'enfant
        //  -> La valeur de la variable utiliser dans l'appel est accessible au parent.
        props.onAddIncr(v);
    }

    return (
        <div>
            <input type="number" placeholder="Par defaut : 1"
                   value={incr} onChange={e => setIncr(e.target.value)} />
            <button onClick={handleClick}>Ajouter</button>
        </div>
    );
}

// L'utilisation de la "loop" dans les defaultProps permet d'eviter de devoir tester
//  si la props est initialiser avec d'executer l'event.
ActionIncrement.defaultProps = {
    onAddIncr: () => {} // loop
}

ActionIncrement.propTypes = {
    onAddIncr: PropTypes.func
}

export default ActionIncrement;