import React, {Component} from "react";
import "./pipeline.styles.css";
import Editable from "react-editable-title";
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import {Task} from "../tasks/task.component";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export class Pipeline extends Component{
    constructor(props) {
        super(props);
        this.state = {
          pipelineIdCurrent: props.id ,
          pipelineTitle: "Pipeline " + props.id,
          tasks: [],
          taskId: 0
        };
      }
    handleTextUpdate = (e) => {
        this.setState({ pipelineTitle: e})
      }
    addTask = () => {
        const task = <Task id={this.state.taskId} key={this.state.taskId} />  ;
        this.setState({taskId: this.state.taskId + 1});
        this.state.tasks.push(task);
    }
    removePipeline = () => {
        this.props.sendData(this.state.pipelineIdCurrent);
    }
      render(){
        return(<div className="pipeline" > 
            <div className="pipelineHeader"><h4 id="addPipelineButton" align="left">
            <Editable
              text={this.state.pipelineTitle}
              editButton
              editControlButtons
              placeholder="Type here"
              cb={this.handleTextUpdate}
            />
            </h4></div>
            <div className="pipelineCenter">
              <div className="tasks">{this.state.tasks}</div>
            </div>
            <div className="pipelineFooter">
                <Button id="addTaskButton" variant="primary" onClick={() => this.addTask()}>Add Task</Button>
                <Button id="removePipelineButton" variant="secondary" onClick={() => this.removePipeline()}>Remove Pipeline</Button>
            </div>
            </div>
        );
      }
}