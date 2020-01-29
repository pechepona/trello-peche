import React, { Component } from "react";
import "./task.styles.css";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap-buttons";

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "Task number " + props.id,
      taskDescription: "",
      taskId: props.id,
      show: false
    };
  }
  handleClose = () => {
    this.setState({ show: false });
    this.render();
  };
  handleCloseAndSave = () => {
    var input1 = document.getElementById('taskTitleInput');
    var input2 = document.getElementById('taskDescriptionInput');
    var value1 = input1.value;
    var value2 = input2.value;
    this.setState({taskTitle: value1});
    this.setState({taskDescription: value2});
    this.setState({ show: false });
    this.render();
  };
  handleShow = () => {
   this.setState({ show: true });
    
  };
  render() {
    return (
      <div className="task" onClick={this.handleShow}>
        <p>{this.state.taskTitle}</p>
        <p>{this.state.taskDescription}</p>
        <div onClick={e => e.stopPropagation()}>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Task {this.state.taskId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Change task title</p>
            <input id="taskTitleInput" type="text" defaultValue={this.state.taskTitle}/>
            <p>Change task description</p>
            <textarea id="taskDescriptionInput" type="text" defaultValue={this.state.taskDescription}/>
          </Modal.Body>
          <Modal.Footer >
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseAndSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>


      </div>
    );
  }
}
