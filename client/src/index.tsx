import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from "./redux/store";
import { loadUser } from "./redux/actions/user";
import Home from "./pages/Home/Home";
import Donations from "./pages/Donations/Donations";
import DonateForm from "./pages/DonateForm/DonateForm";
import Success from "./pages/Success/Success";

import './index.scss'



const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/donate' component={DonateForm} />
          <Route exact path='/success' component={Success} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
