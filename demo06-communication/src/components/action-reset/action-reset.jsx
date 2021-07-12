import PropTypes from 'prop-types';

const ActionReset = (props) => {
    // La props 'appear' -> Donnée recu du parent
    // La props 'onResetAction' -> Méthode recu, pour que l'enfant envoye un event
    const {appear, onResetAction} = props;

    return (
        <div>
            {appear && (
                <button onClick={() => onResetAction()}>Remettre à zero !</button>
            )}
        </div>
    );
}

ActionReset.defaultProps = {
    appear: true,
    onResetAction: () => {}
}

ActionReset.propTypes = {
    appear: PropTypes.bool,
    onResetAction: PropTypes.func
}

export default ActionReset;