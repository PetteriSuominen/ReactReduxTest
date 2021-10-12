import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./store/index";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Form from "./Form";

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/form" component={Form}/>
            <Route path="/" component={Home} />
          </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
