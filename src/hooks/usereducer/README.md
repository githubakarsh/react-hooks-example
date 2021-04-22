1. useReducer is used for state management.
2. it requires two arguments, 1. function, 2. initial state
3. useReducer works pretty much same as reducer in redux, if you are familier, it accepts two arguments a function that changes the state, and a initialState value
4. it uses 'dispatch' for dispatching action to reducer with the values : exp : dispatch({type: 'type_of_action', value: 'new_value_to_be_replaced'})
5. 