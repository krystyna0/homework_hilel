import {createStore, combineReducers} from 'redux';
import {useDispatch, useSelector} from "react-redux";


const initialStateCounter = {count: 0};

const counterReducer = (state = initialStateCounter, action) => {
    const {type} = action;
    switch (type) {
        case 'Increment':
            return {count: state.count + 1}
        case 'Decrement':
            return {count: state.count - 1}
        default:
            return state;
    }
}


const initialStateAuth = {isLogin: false};

const authReducer = (state = initialStateAuth , action) => {
    switch (action.type) {
        case 'Login':
            return {isLogin: true}
        case 'Logout':
            return {isLogin: false}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
})


export const store = createStore(rootReducer);

const ReduxCounter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.counter);

    const handleIncrement = () => {
        dispatch({type: "Increment"});
    };

    const handleDecrement = () => {
        dispatch({type: "Decrement"})
    };

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default ReduxCounter;