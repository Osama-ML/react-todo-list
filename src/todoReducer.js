export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            
            return [...state, action.payload];

        case 'delete':

            return state.filter(todo => todo.id !== action.payload);
    
        case 'done':

            return state.map(todo => 
                (todo.id === action.payload) ? { ...todo, done: !todo.done} : todo
            )

        case 'edit':
            
            let edited = prompt(`Edit the task "${action.payload.desc}"`)
            
            if(edited === null || edited === ""){
                return state.map(todo => (todo.id === action.payload.id) && {...todo})
            }else{
                return state.map(todo => (todo.id === action.payload.id) ? {...todo, desc: edited} : todo)
            }
            
        default:
            return state;
    }

}