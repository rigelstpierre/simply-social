import React from "react";
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router';
import ApplicationWrapper from "./application_wrapper";

require('./stylesheets/style.scss');

render((
  <Router>
    <Route path="/" component={ ApplicationWrapper }>
    </Route>
  </Router>
), document.getElementById("app"))
