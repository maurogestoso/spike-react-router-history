import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/steps/1">
          <Step1 />
        </Route>
        <Route path="/steps/2">
          <Step2 />
        </Route>
        <Route path="/steps/3">
          <Step3 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
