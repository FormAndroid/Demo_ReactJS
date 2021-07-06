import PropTypes from 'prop-types';
// https://fr.reactjs.org/docs/typechecking-with-proptypes.html

const Welcome = function(props) {
    // Recuperation des attributs des "props"
    const name = props.name;   

    // Recuperation via le destructuring (Alternative)
    // -> const {name} = props;

    // Renvoyer le rendu du composant (-> JSX)
    return (
        <p>Bienvenue {name}</p>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome;