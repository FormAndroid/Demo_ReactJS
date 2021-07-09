import { useState } from 'react';
import style from 'text-color.module.css';

const TextColor = (props) => {
    const { text } = props;

    const [color, setColor] = useState('');

    const swapColor = () => {
        setColor(c => (c === '') ? style.pink : '');
    }

    return (
        <p className={color} onClick={swapColor}>{text}</p>
    );
}

TextColor.defaultProps = {
    text: ''
};

export default TextColor;