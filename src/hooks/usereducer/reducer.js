export const initialState = {
    name : 'Akarsh Saraff',
    inputValue : '',
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'change_name': 
            return  {...state, name: action.value, inputValue: action.value}
        default: 
            return state;
    }
}

