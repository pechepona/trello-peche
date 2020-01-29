import React, {Component, useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/navbar.component";
import Editable from "react-editable-title";
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import {Pipeline} from "./components/pipeline/pipeline.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pipes: [],
      boardTitle: "Trello-Peche Board",
      pipelineId: 0,
      pipelineIdCurrent: 0
    };
  }
  removePipeline = (data) => {
    const newArray = this.state.pipes;
    for( var i = 0; i < newArray.length; i++){ 
      if ( newArray[i].props.id === data) {
        newArray.splice(i, 1); 
      }
   }
   this.setState({pipes: newArray});
   console.log(this.state.pipes);
  }
  addPipeline = () => {
    const pipeline = <Pipeline sendData={this.removePipeline} id={this.state.pipelineId} key={this.state.pipelineId} />  ;
    this.setState({pipelineId: this.state.pipelineId + 1});
    this.state.pipes.push(pipeline);
  }
  handleTextUpdate = (e) => {
    this.setState({ boardTitle: e})
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 id="editableTitle" align="left">
        <Editable
          text={this.state.boardTitle}
          editButton
          editControlButtons
          placeholder="Type here"
          cb={this.handleTextUpdate}
        />
        </h1>
        <hr id="brSeparateTitle"></hr>
        <Button id="addPipelineButton" variant="primary" onClick={() => this.addPipeline()}>Add Pipeline</Button>
        <div id="pipelines" className="pipelines">{this.state.pipes}</div>
      </div>
    );
  }
}

export default App;