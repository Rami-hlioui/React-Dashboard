import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import SideBar from "./components/sidebar_menu_component/sidebar_menu_compoentn";
import General from "./components/General_page/general_page";
import NavBar from "./components/navbar_component/navbar_component";
import SignIn from "./components/signin_component/signin_component";
import ClientDetails from "./components/client_component/client_details_component";
import Private from "./components/private_route/Private";
import Clients from "./components/client_component/client_component";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
      </div>

      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Private exact path="/clients" component={Clients} />
        <Private exact path="/overview" component={General} />
        <Private
          path="/clients/:clientId"
          exact
          render={({ match }) => <ClientDetails match={match} />}
        />
      </Switch>
    </div>
  );
}
