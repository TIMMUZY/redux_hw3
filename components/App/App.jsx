import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trigger } from '../../store/actions/actions';

const App = () => {
    const {count} = useSelector((state) => state);
    const dispatch = useDispatch();

    const onIncrement = () => dispatch(trigger(Math.random()*50));
    const onDecrement = () => dispatch(trigger(-Math.random()*50));



    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>INC</button>
            <button onClick={onDecrement}>DEC</button>
        </div>
    );
}

export default App;
