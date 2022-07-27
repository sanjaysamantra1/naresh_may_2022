import React from "react";
import ConditionalDemo1 from "../Conditional/ConditionalDemo1";
import ConditionalDemo2 from "../Conditional/ConditionalDemo2";
import Addition1 from "../events/Addition1";
import Addition2 from "../events/Addition2";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import SyntheticEventDemo from "../events/SyntheticEventDemo";
import ClickCounter from "../HOC/ClickCounter";
import ClickCounterWithHOC from "../HOC/ClickCounterWithHOC";
import HoverCounter from "../HOC/HoverCounter";
import HoverCounterWithHOC from "../HOC/HoverCounterWithHOC";
import LifecycleDemo1 from "../LifeCycleHooks/LifecycleDemo1";
import ListDemo1 from "../ListItems/ListDemo1";
import ListDemo2 from "../ListItems/ListDemo2";
import ListDemo3 from "../ListItems/ListDemo3";
import MemoDemo1 from "../memo/MemoDemo1";
import Parent from "../parent/Parent";
import Greet from "../props/Greet";
import LocalVariableDemo1 from "../props/LocalVariableDemo1";
import LocalVariableDemo2 from "../props/LocalVariableDemo2";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import CounterDemo4 from "../state/CounterDemo4";
import ModalDemo1 from "../state/ModalDemo1";
import ModalDemo2 from "../state/ModalDemo2";
import SearchDemo1 from "../state/SearchDemo1";
import SweetAlertDemo1 from "../state/SweetAlertDemo1";
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
        {/* <CounterDemo1></CounterDemo1> */}
        {/* <CounterDemo2></CounterDemo2> */}
        {/* <CounterDemo3></CounterDemo3> */}
        {/* <CounterDemo4></CounterDemo4> */}
        {/* <SweetAlertDemo1></SweetAlertDemo1> */}
        {/* <ModalDemo1></ModalDemo1> */}
        {/* <ModalDemo2></ModalDemo2> */}
        {/* <SearchDemo1></SearchDemo1> */}
        {/* <EventDemo1></EventDemo1> */}
        {/* <EventDemo2></EventDemo2> */}
        {/* <EventDemo3></EventDemo3> */}
        {/* <Addition1></Addition1> */}
        {/* <Addition2></Addition2> */}
        {/* <SyntheticEventDemo></SyntheticEventDemo> */}
        {/* <Parent></Parent> */}
        {/* <MemoDemo1></MemoDemo1> */}
        {/* <ClickCounter></ClickCounter>
        <br></br>
        =============================================
        <HoverCounter></HoverCounter> */}
        {/* <ClickCounterWithHOC></ClickCounterWithHOC>
        <HoverCounterWithHOC></HoverCounterWithHOC> */}
        <LifecycleDemo1 color={"blue"}></LifecycleDemo1>
      </div>
    );
  }
}
