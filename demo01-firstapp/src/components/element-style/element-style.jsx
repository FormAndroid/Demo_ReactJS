import PropTypes from 'prop-types';

// Importer le style CSS sous forme d'objet JS
import style from './element-style.module.css';

const ElementStyle = function(props) {
    const {nb1, nb2} = props; // Destructuring
    const result = nb1 + nb2;

    // La accolades ci-dessous permettent d'intégrer 
    // du contenu JavaScript dans le code JSX.
    return (
        <p>
            La somme de <span className={style.nb}>{nb1}</span> et <span className={style.nb}>{nb2}</span> donne <span className={style.result}>{result}</span>.
        </p>
    );
}

ElementStyle.defaultProps = {
    nb1: 42,
    nb2: 0
};
ElementStyle.propTypes = {
    nb1: PropTypes.number,
    nb2: PropTypes.number
};

export default ElementStyle;