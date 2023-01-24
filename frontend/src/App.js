import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
    return ( //only one element
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen/>} exact ></Route> // See exact for routing v6
                        <Route path='/product/:id' element={<ProductScreen/>}></Route>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}
export default App;
