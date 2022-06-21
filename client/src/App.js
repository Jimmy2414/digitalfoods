import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

import Home from './components/home/home';
import illustrationSvgStyled from './components/LandingPage/illustrationSVG/IllustrationSvgStyled';
import { Link } from 'react-router-dom';
import RecipeCreater from './components/home/RecipeCreate';
import cardDetail from './components/home/cardDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={RecipeCreater} />
      <Route exact path="/" component={illustrationSvgStyled} />
      <Route exact path="/recipes/:id" component={cardDetail} />
    </div>
  );
}

export default App;
