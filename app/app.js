import React from "react";
import { render } from 'react-dom'
import ApplicationWrapper from "./application_wrapper";

require('./stylesheets/style.scss');

render(
  <ApplicationWrapper />,
  document.getElementById("app")
)
