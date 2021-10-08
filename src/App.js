import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Plans from './pages/Plans';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/plans">
        <Plans />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="*">{/*render not found page*/}</Route>
    </Switch>
  );
}

export default App;
