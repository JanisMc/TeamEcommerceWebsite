import './App.css';
import Navbar from './components/navbar/NavbarComponent'
import Home from './components/home/HomePage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Category from './components/category/CategoryPage'
import Individual from './components/individual/IndividualPage'



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/product/laptop"  render={() =><Category type='laptop'/>}/>
                <Route exact path = "/product/desktop"  render={() =><Category type='desktop'/>}/>
                <Route exact path = "/product/mobile"  render={() =><Category type='mobile'/>}/>
                <Route exact path = "/product/smartwatch"  render={() =><Category type='smartwatch'/>}/>
                <Route exact path = "/product/accessories"  render={() =><Category type='accessories'/>}/>
                <Route path = "/product/individual" render = {(props) => <Individual id = {props.location.state.productID}/>}/>
            </Switch>
        </BrowserRouter>
    )
} 
export default App;