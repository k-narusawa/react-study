import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import Default from './Default';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { ThemeProvider } from "@material-ui/core/styles";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Default}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);