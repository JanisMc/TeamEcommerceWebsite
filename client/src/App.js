import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import MainProductPage from './components/MainProductPage';
import Category from './components/category/Category'



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route exact path = "/product/laptop"  render={() =><Category type='laptop'/>}/>
                <Route exact path = "/product/desktop"  render={() =><Category type='desktop'/>}/>
                <Route exact path = "/product/mobile"  render={() =><Category type='mobile'/>}/>
                <Route exact path = "/product/smartwatch"  render={() =><Category type='smartwatch'/>}/>
                <Route exact path = "/product/accessories"  render={() =><Category type='accessories'/>}/>
            </Switch>
        </BrowserRouter>
    )
} 
export default App;