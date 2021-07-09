import PropTypes from 'prop-types';
import { useState } from 'react';

const regexValidPeople = /^([1-9][0-9]*)?$/;

const RegisterForm = (props) => {

    // Création des valeurs de state pour stocker le valeur du formulaire
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [nbPeople, setNbPeople] = useState('');
    const [theme, setTheme] = useState('dev');
    const [newsletter, setNewsletter] = useState('no')

    // Méthode pour gérer certaines inputs
    const handleNbPeople = (e) => {
        const { value } = e.target;
        if (regexValidPeople.test(value)) {
            setNbPeople(value);
        }
    }

    const handleNewsletter = (e) => {
        setNewsletter(e.target.value);
    }

    // Méthode d'action du formulaire (submit / reset)
    const handleSubmit = (e) => {
        e.preventDefault(); // Annule le comportement "submit" du formulaire (refresh de la page)

        const data = {
            pseudo: pseudo,
            email: email,
            nbPeople: parseInt(nbPeople),
            theme: theme,
            newsletter: newsletter
        }

        // Cas réel : Envoi sur un server Web ou envoi vers un autre composant React
        console.log(data); 

        // On demande au formulaire de déclancher le comportement "reset" (cf: event onReset)
        e.target.reset();
    }

    const handleReset = (e) => {
        e.preventDefault(); // Annule le comportement "reset" du formulaire

        setPseudo('');
        setEmail('');
        setNbPeople('');
        setTheme('infra');
        setNewsletter('no');
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
                <label htmlFor="pseudo">Pseudo </label>
                <input id="pseudo" type="text" onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label htmlFor="nbPeople">Nombre de personne </label>
                <input id="nbPeople" type="text" onChange={handleNbPeople} value={nbPeople} />
            </div>
            <div>
                <label htmlFor="theme">Theme </label>
                <select name="theme" id="theme" onChange={(e) => setTheme(e.target.value)} value={theme}>
                    <option value="dev">Developpement</option>
                    <option value="infra">Infrastructure</option>
                    <option value="admin">Administratif</option>
                </select>
            </div>
            <div>
                <label>S'incrire à la newsletter </label>
                <div>
                    <label>
                        <input type="radio" name="newsletter" value="yes" 
                               onChange={handleNewsletter} checked={newsletter === "yes"} />
                        Oui (Events & promo)
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="newsletter" value="event"
                               onChange={handleNewsletter} checked={newsletter === "event"} />
                        Uniquement les events
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="newsletter" value="no"
                               onChange={handleNewsletter} checked={newsletter === "no"} />
                        Non
                    </label>
                </div>
            </div>
            <button type="submit">Envoyer</button>
            <button type="reset">Effacer</button>
        </form>
    )
}

export default RegisterForm;