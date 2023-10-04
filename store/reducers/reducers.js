
const initialState = {
    count: 0,
    text: 'Hello world',
}

const reducers = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case 'setCount':
            return { ...state, count: (state.count += payload)}
        default:
            return state;
    }

}

export default reducers;