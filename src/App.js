import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./store/index";
import Page from "./Page";

import "./App.css";
import Home from "./Home";

const store = configureStore({});

const renderRoute = (viewName) => (routeProps) =>
  <Page {...routeProps} viewName={viewName} />;

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/about" render={renderRoute("about")} />
          <Route path="/form" render={renderRoute("form")} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
