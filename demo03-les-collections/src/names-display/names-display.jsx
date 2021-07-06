import PropTypes from 'prop-types';

const NamesDisplay = (props) => {

    const namesJSX = props.people.map(
        p => <li key={p.id}>{p.name}</li>
    );
    console.log('Liste JSX de nom', namesJSX);

    return (
        <>
            <h2>Liste de nom</h2>
            <ul>{namesJSX}</ul>
        </>
    );
}

NamesDisplay.propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}

export default NamesDisplay