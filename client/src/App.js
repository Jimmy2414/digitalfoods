import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home/home'
import LandingPage from './components/LandingPage/landingPage'
import RecipeCreater from './components/home/RecipeCreate'
import cardDetail from './components/home/cardDetail'


function App() {
  return (
    <div className="App">


      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={RecipeCreater} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/recipes/:id' component={cardDetail} />

    </div>
  );
}

export default App;

