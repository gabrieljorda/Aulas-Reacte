import React from "react";
import Button from "./components/Button";
import CounterButton from "./components/CouterButton";
import Input from "./components/imput";
import TaskManager from "./components/TaskManager";
import CheckLogin from "./components/CheckLogin";

function App() {
  return (
    <div>
      <CounterButton />
      <hr />
      <Button />
      <hr />
      <Input />
      <hr />
      <TaskManager />
      <hr />
      <CheckLogin />
      <hr />
    </div>
  );
}
export default App;
