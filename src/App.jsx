import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Stats from './components/Stats';
import initialCounters from './data/inititalCounters';

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (CounterId) => {
      const updatedCounters = counters.map(c => {
        if(c.id === CounterId){
          return {
            ...c,
            value: c.value + 1,
          }
        }
        return c;
      })
      setCounters(updatedCounters)
  }

  const handleDecrement = (CounterId) => {
      const updatedCounters = counters.map(c => {
        if(c.id === CounterId){
          return {
            ...c,
            value: c.value - 1,
          }
        }
        return c;
      })
      setCounters(updatedCounters)
  }

  const totalCount = counters.reduce((sum, curr) => sum + curr.value, 0)
  return (
    <>
       <h1>Simple Counter</h1>
       {counters.map(counter => <Counter key={counter.id} counter={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />)}
       <Stats TotalCount={totalCount} />
    </>
  )
}

export default App
