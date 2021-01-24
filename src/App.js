import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Lazy loading / Code splitting for both features
const Auth = lazy(() => import("./features/auth/Auth"));
const Dashboard = lazy(() => import("./features/dashboard/Dashboard"));

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route path="/">{isLoggedIn ? <Dashboard /> : <Auth />}</Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
