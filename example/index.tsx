import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../src/components/productCard/index';

const App = () => {
  return (
    <div>
      <ProductCard 
        initialValues={{
          count:3,
          maxCount:10
        }}
      >
        {
          ({reset, increaseBy, count}) => (
            <>
              <ProductCard.Img/>
              <ProductCard.Title title='hola mundo' />
              <ProductCard.Buttons />

              <button onClick={reset}>rese</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              <button  onClick={() => increaseBy(+2)}>+2</button>
              <span>{count}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
