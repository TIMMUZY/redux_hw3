
export const trigger = (payload) => {
    return{
        type: 'setCount',
        payload,
    }
}