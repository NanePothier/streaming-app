import { Switch, Route, Redirect } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import PlansPage from './pages/PlansPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/plans">
        <PlansPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="*">{/*render not found page*/}</Route>
    </Switch>
  );
}

export default App;
