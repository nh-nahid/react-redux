import './App.css'
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counters/counterSlice';
import Post from './components/Post';

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch()
  const handleIncrement = (CounterId) => {
     dispatch(increment(CounterId))
  }

  const handleDecrement = (CounterId) => {
     dispatch(decrement(CounterId))
  }

  const totalCount = counters.reduce((sum, curr) => sum + curr.value, 0)
  return (
    <>
       <h1>Simple Counter</h1>
       {counters.map(counter => <Counter key={counter.id} counter={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />)}
       <Stats TotalCount={totalCount} />
       <Post />
    </>
  )
}

export default App
