import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage";
import { DeteilPage } from "./pages/DeteilPage";
import { CreatePage } from "./pages/CreatePage";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DeteilPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
