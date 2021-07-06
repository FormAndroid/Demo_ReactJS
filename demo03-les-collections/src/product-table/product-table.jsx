import PropTypes from 'prop-types';
import ProductTableItem from './product-table-item';

const ProductTable = (props) => {

    const productJSX = props.products.map(
        p => <ProductTableItem key={p.id} {...p} />
    );

    return (
        <>
            <h2>Liste des produits</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productJSX}
                </tbody>
            </table>
        </>
    )
}

ProductTable.propTypes = {
    products: PropTypes.array
}

export default ProductTable;