import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

// import App from './App.jsx';
// import App from './App.Redirect.jsx';
import App from './App.Authentication.jsx';
// import App from './App.Nested.jsx';
// import App from './App.Descendant.jsx';
// import App from './App.QueryParams.jsx';

// use-query-params adapter for React Router 6
const RouteAdapter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={RouteAdapter}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>
);
