import React from "react";
import Splash from "./components/Splash";
import ShipList from "./components/ShipList";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import { Logo } from "arwes";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import ApolloTest from "./components/ApolloTest";
function App() {
  const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* Don't forget to include the history module */}
        <Router history={history}>
          <header>
            <NavBar />
            <ExternalApi />
          </header>
          <Logo className="logo"  animate size={300} />
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/ships" component={ShipList} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/apollo-test" component={ApolloTest} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
