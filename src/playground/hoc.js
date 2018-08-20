//higher order component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is super secret message . Please dont share !</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication  = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticatied ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view info</p>
            )}
        </div>
    )
}
const AuthInfo = requireAuthentication(Info)
const AdminInfo = withAdminWarning(Info)
const appRoot  = document.getElementById('app')

ReactDOM.render(<AuthInfo isAuthenticatied={true} info='There are some details'/>,appRoot)