import React, { Suspense } from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';
import router from './router';
import LoadingPage from './components/LoadingPage';
import ProtectRoute from './components/ProtectRoute';

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Switch>
            {router.map((routeConfig) => {
              const { authorizeType, path } = routeConfig;
              return authorizeType ? (
                <ProtectRoute {...routeConfig} key={path} />
              ) : (
                <Route {...routeConfig} key={path} />
              );
            })}
            <Redirect to="/error" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
