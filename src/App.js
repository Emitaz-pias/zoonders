import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import homePage from './pages/homePage';
import privacyPolicy from './pages/privacyPolicy';
import termsConditions from './pages/termsConditions';
import aboutUs from './pages/aboutUs';
import notFound from './pages/notFound';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/privacy-policy" component={privacyPolicy} />
          <Route exact path="/terms-&-conditions" component={termsConditions} />
          <Route exact path="/about-us" component={aboutUs} />
          <Route exact path="/*" component={notFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
