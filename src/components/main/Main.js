import React from "react";
import ConditionalDemo1 from "../Conditional/ConditionalDemo1";
import ConditionalDemo2 from "../Conditional/ConditionalDemo2";
import ListDemo1 from "../ListItems/ListDemo1";
import ListDemo2 from "../ListItems/ListDemo2";
import ListDemo3 from "../ListItems/ListDemo3";
import Greet from "../props/Greet";
import LocalVariableDemo1 from "../props/LocalVariableDemo1";
import LocalVariableDemo2 from "../props/LocalVariableDemo2";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import CounterDemo4 from "../state/CounterDemo4";
import "./Main.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        {/* This is main component-{React.version} */}
        {/* <ConditionalDemo1></ConditionalDemo1> */}
        {/* <ConditionalDemo2></ConditionalDemo2> */}
        {/* <ListDemo1></ListDemo1> */}
        {/* <ListDemo2></ListDemo2> */}
        {/* <ListDemo3></ListDemo3> */}
        {/* <LocalVariableDemo1></LocalVariableDemo1>
        <LocalVariableDemo2></LocalVariableDemo2> */}
        {/* <Greet name="sanjay" msg="good morning"></Greet>
        <Greet name="mohit" msg="good evening"></Greet>
        <Greet name="Rushikesh">
          <div>HTML Content from Parent</div>
        </Greet> */}
        {/* <CounterDemo1 ></CounterDemo1> */}
        {/* <CounterDemo2></CounterDemo2> */}
        {/* <CounterDemo3></CounterDemo3> */}
        <CounterDemo4></CounterDemo4>
      </div>
    );
  }
}
