import { useState } from "react";

const DateDuJour = () => {

    const [date, setDate] = useState(new Date());

    const displayDate = date.toLocaleDateString('fr-BE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        second: '2-digit'
    });

    return (
        <h3>Nous sommes le {displayDate}</h3>
    );
}

export default DateDuJour;