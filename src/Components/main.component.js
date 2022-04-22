import React, { Component } from "react";
import Searchbar from "./searchbar.component";
import Chart from "./chart.component";
import Description from "./description.component";

export default function Main(props) {
  const printit = () => {
    console.log(sessionStorage.getItem("token"));
  };

  const printData = () => {
    console.log(props.stockData);
  };

  return (
    <div className="main">
      <Searchbar />
      {props.login && <Chart login={props.login} data={props.userData} personal={"pbox"} following={props.following} follow={props.follow} unfollow={props.unfollow}/>}
      <Chart login={props.login} data={props.data} personal={"box"} following={props.following} follow={props.follow} unfollow={props.unfollow}/>
      <Description />
      <button onClick={printit}/>
      <button onClick={printData}/>
    </div>
  );
}