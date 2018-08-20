import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'
//ADD_EXPENSE
const addExpense = (
    {
        description='',
        note='',
        amount = 0,
        createdAt = 0
    }={}
)=>({
    type :'ADD_EXPENSE',
    expense : {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


//EDIT_EXPENSE
const editExpense = (id,updates)=>({
    type : 'EDIT_EXPENSE',
    id,
    updates

})
//REMOVE_EXPENSE
const removeExpense = ({id}={}) => (
    {
        type : 'REMOVE_EXPENSE',
        id
    }
)
//SET_TEXT_FILTER
const setTextFilter = (text='')=>({
    type :'SET_TEXT_FILTER',
    text
})
//SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type : 'SORT_BY_AMOUNT'
})
//SORT BY DATE
const sortByDate = ()=>({
    type : 'SORT_BY_DATE'
})
//SET_START_DATE
const setStartDate = (startDate=undefined) =>({
    type:'SET_START_DATE',
    startDate
})

//SET_END_DATE
const setEndDate = (endDate=undefined) =>({
    type:'SET_END_DATE',
    endDate
})

//expenses reducer Note: Inside reducer you dont have to change variable you havt read it and use it
const expensesReducerDefaultState =[]
const expensesReducer =(state=expensesReducerDefaultState,action)=>{
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

//Filter reducer
const filterReducerDefaultState = {
    text:'',
    sortBy : 'date',
    startDate : undefined,
    endDate:undefined
}

const filterReducer =(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state,text:action.text}
        case 'SORT_BY_DATE':
            return {...state,sortBy:'date'}
        case 'SORT_BY_AMOUNT':
            return {...state,sortBy:'amount'}
        case 'SET_START_DATE':
            return {...state,startDate:action.startDate}
        case 'SET_END_DATE':
            return {...state,endDate:action.endDate}
        default :
            return state
    }
}
 //combining two reducers
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filter: filterReducer
    })
)

//Get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{ 
        const endDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
        const textMatch = typeof startDate !=='number' || expense.createdAt <=endDate
        const startDateMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1:-1
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1:-1
        }
    })

}
store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filter)
    console.log(visibleExpenses)
})



// store.dispatch(addExpense({description:'Home Rent',amount:1100,createdAt:1000}))

// store.dispatch(addExpense({description:'Bike Rent',amount:100}))

// store.dispatch(addExpense({description:'Car Rent',amount:300}))
const expenseTwo = store.dispatch(addExpense({description:'Home Rent',amount:1000,createdAt:0}))
const expenseOne = store.dispatch(addExpense({description:'Car Rent',amount:100,createdAt:1000}))

// store.dispatch(setStartDate(124))
// store.dispatch(setEndDate(1000))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))
//store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())



const demoState = {
    expenses:[{
        id:'1',
        description :'January rent',
        note : 'This was the final payment for that addres',
        amount : 650,
        createdAt : 0
    }],
    filters:{
        text : 'rent',
        sortBy:'amount',//date or amount
        startDate : undefined,
        endDate:undefined
    }
}


