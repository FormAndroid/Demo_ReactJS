import PropTypes from 'prop-types';

const ProductTableItem = (props) => {
    const {name, price, onSale} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{price} €</td>
            <td>{onSale && 'En solde'}</td>
        </tr>
    )
}

ProductTableItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onSale: PropTypes.bool.isRequired
}

export default ProductTableItem;