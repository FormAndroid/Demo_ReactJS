import './App.css';
import NamesDisplay from './names-display/names-display';

import {nanoid} from 'nanoid';
import ProductTable from './product-table/product-table';

function App() {

  const people = [
    { id:'p1', name:'Marie'},
    { id:'p2', name:'Isaac'},
    { id:'p3', name:'William'},
    { id:'p4', name:'Gianni'},
    { id:'p5', name:'Amine'}
  ]
  console.log('Liste de nom', people);

  const products = [
    {
      id: nanoid(),
      name: 'Pomme',
      price: 1,
      onSale: false
    },
    {
      id: nanoid(),
      name: 'Tomate',
      price: 2,
      onSale: false
    },
    {
      id: nanoid(),
      name: 'Coca',
      price: 5,
      onSale: true
    }
  ]

  return (
    <div className="">
      <h1>Demo des collections</h1>

      <NamesDisplay people={people} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;
