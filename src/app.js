
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense,editExpense,removeExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filter)
})
// store.dispatch(addExpense({description:'Home Rent Bill',amount:100}))
// store.dispatch(addExpense({description:'Water Bill',amount:200}))
// store.dispatch(addExpense({description:'Gas Bill',amount:1500,createdAt:1000}))






const appRoot  = document.getElementById('app')
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx,appRoot)




