export const addAction = (payload) => ({
    type:'ADD',
    payload: payload + 1
});

export const subtractAction = (payload) => ({
    type:'SUBTRACT',
    payload: payload - 1
});
