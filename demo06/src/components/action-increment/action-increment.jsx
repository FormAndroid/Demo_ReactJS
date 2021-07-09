import PropTypes from 'prop-types';
import { useState } from 'react';

const ActionIncrement = (props) => {

    const [incr, setIncr] = useState('1');

    const handleClick = () => {
        console.log('Ajout de l\'increment');

        // Utilisation d'un argument des props en tant que fonction
        const v = ( incr !== '' && !isNaN(incr)) ? parseInt(incr) : 1;
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

ActionIncrement.defaultProps = {
    onAddIncr: () => {} // loop
}

ActionIncrement.propTypes = {
    onAddIncr: PropTypes.func
}

export default ActionIncrement;