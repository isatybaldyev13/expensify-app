
const expensesReducerDefaultState =[]
 export default(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense]//state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>(id!==action.id))//Remove expense by id
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {...expense,...action.updates}
                }else{
                    return expense
                }
            })//Remove expense by id
        default :
            return state
    }
}
