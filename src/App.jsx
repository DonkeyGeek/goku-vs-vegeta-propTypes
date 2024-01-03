import { useCallback, useState } from 'react';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';

const App = () => {

  const [vegetaLife, setVegetaLife] = useState(100);
  const [gokuLife, setGokuLife] = useState(100);

  // Option 1
  // const reduceLife = useCallback((param, param2) => {
  //   if (param === 'Vegeta') {
  //     setGokuLife(prevLife => prevLife - param2)
  //   } else if (param === 'Goku') {
  //     setVegetaLife(prevLife => prevLife - param2)
  //   }
  // }, [setVegetaLife, setGokuLife])

  // Option 2
  const reduceLife = useCallback((param, param2) => {
    const characterToUpdate = param === "Goku" ? setVegetaLife : setGokuLife;
    characterToUpdate(prevLife => prevLife - param2);
  }, [setVegetaLife, setGokuLife])

  return (
    <div className='container text-center'>
      <h1>Goku Vs Vegeta</h1>
      <hr />
      <div className='row'>
        <Vegeta name="Vegeta" life={vegetaLife} reduceHandler={reduceLife} />
        <Goku name="Goku" life={gokuLife} reduceHandler={reduceLife} />
      </div>
    </div>
  )
}

export default App
