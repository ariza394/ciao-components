# CIAO-Components

# Ejemplo
```
import { ProductCard } from 'ciao-components'
```

```
<ProductCard 
  initialValues={{
    count:3,
    maxCount:10
  }}
>
  {
    ({reset, increaseBy, count}) => (
      <>
        <ProductCard.Img img={globo}/>
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
```