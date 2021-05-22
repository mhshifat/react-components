import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ToggleSwitchPage } from "../pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/toggle-switch" component={ToggleSwitchPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
