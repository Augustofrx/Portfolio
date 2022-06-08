import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';


export function AppRouter() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        </BrowserRouter>
    )



}