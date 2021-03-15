import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import Home from "./pages/Home/Home";
import Donations from "./pages/Donations/Donations";


import './index.scss'


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/donate' component={Donations} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
