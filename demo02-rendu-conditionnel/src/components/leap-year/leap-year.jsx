import PropTypes from 'prop-types';

const LeapYear = (props) => {
    const {year} = props;
    const isLeap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

    const verb = isLeap ? 'est' : 'n\' est pas';

    // Rendu conditionnel avec un "if"
    if(year > 10_000) {
        return (
            <div>
                <h3>L'année encodé {year} est trop grande :o</h3>
            </div>
        );
        // On fait un return, donc la suite n'est pas executer 
    }

    return (
        <div>
            <h3>L'année encodé est {year}</h3>
            {/* V1 avec une ternaire pour la balise */}
            {(isLeap) ? (
                <p>Celle-ci est bissextille</p>
            ) : (
                <p>Celle-ci n'est pas bissextille</p>
            )}

            {/* V2 condition sur le verbe uniquement */}
            <p>Celle-ci {verb} bissextille</p>        
        </div>
    );
}

LeapYear.propTypes = {
    year: PropTypes.number.isRequired
};

export default LeapYear;