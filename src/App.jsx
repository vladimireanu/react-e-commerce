import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Basket from "./components/Basket/Basket";
import Default from "./components/Default";
import Modal from "./components/Modal";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap/dist/react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

class App extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route exact path={'/'} component={ProductList}/>
                    <Route path={'/details'} component={Details}/>
                    <Route path={'/basket'} component={Basket}/>
                    <Route component={Default}/>
                </Switch>
                <Modal/>

            </>
        );
    }
}

export default App;
