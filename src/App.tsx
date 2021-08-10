import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
       <NavBar />
       <Switch>
         <Route path = '/' component={Home} exact/>
         </Switch>
         <Footer / >
    </Router>
  );
}

export default App;
