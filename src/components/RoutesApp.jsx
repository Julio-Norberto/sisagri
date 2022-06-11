import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'

export default function RoutesApp() {
    return (
        <div>

            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>

        </div>
    )
}