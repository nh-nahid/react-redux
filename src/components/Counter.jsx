import Count from './Count';
import Button from './Button';

const Counter = ({ counter, onIncrement, onDecrement }) => {

    return (
        <div>
            <Count count = {counter} />
            <div>
               <Button handler={onIncrement}>Increment</Button>
               <Button handler={onDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;