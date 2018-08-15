import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage=()=>(
    <div>This is from my dashboard</div>
)

const AddExpensePage=()=>(
    <div>This is my add expense dashboard</div>
)
const EditExpensePage=()=>(
    <div>This is my edit expense dashboard</div>
)
const HelpPage=()=>(
    <div>This is my help dashboard</div>
)
const NotFoundPage=()=>(
    <div>404 page !</div>
)
const routes=(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} exact={true}/>
            <Route path="/edit" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpPage} exact={true}/>
            <Route component={NotFoundPage}/>
        </Switch>    
    </BrowserRouter>
)


console.log("App.js is running")
const appRoot  = document.getElementById('app')

ReactDOM.render(routes,appRoot)




