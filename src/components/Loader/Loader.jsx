import React, { Component } from "react";
import Spinner from "react-loader-spinner";
export class Loader extends Component {
  render() {
    return (
      <div className="Spinner">
        <Spinner type="Puff" color="#00BFFF" height={100} width={100}  timeout={700}/>
      </div>
    );
  }
}

export default Loader;