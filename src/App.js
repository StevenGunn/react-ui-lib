import './App.css';
import HomePage from './pages/homepage/home';
import Material from './pages/material/material';
import Semantic from './pages/semantic/semantic'


import { Route, Switch, Redirect } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/material' component={Material}/>
        <Route exact path='/semantic' component={Semantic}/>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
