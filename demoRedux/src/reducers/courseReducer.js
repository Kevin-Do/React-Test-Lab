export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
            //incorrect mutate of state
            //state.push(action.course);
            //return state;
            return[...state,
                Object.assign({}, action.course)
            ];
            //ES6 spread operator on existing state
            //Basically spreads the array and explodes it out here inline
            //Object.assign to create a deep copy of the course passed in
            //together it makes brand new state
        
        default:
            return state; 
    }
}
//default state is empty array courseReducer(state = [],