import PropTypes from 'prop-types';

const Affichage = (props) => {
    // Récupation des valeurs envoyer depuis le parent
    const { contenu, initial } = props;

    return (
        <div>
            <p>Valeur {(contenu === initial) ? 'initial' : 'actuelle'} {contenu}</p>
        </div>
    );
}

Affichage.defaultProps = {
    initial: 0
}

Affichage.propTypes = {
    contenu: PropTypes.number.isRequired,
    initial: PropTypes.number
}

export default Affichage;