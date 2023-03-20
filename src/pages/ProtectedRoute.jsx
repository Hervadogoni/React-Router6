import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function ProtectedRoute({user}) {
 
        if(!user){
            return <Navigate to="/" />
        }
        return <Dashboard user={user}/>
  
        
}
