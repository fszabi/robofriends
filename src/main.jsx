import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import "./index.css";
import { robots } from "./robots.js";
import LogRocket from "logrocket";
LogRocket.init("qu8xog/robofriends");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex justify-center gap-5 p-5">
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  </React.StrictMode>
);
