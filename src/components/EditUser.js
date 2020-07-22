import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {
  const { editTask, tasks } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const taskId = currentUserId;
    const selectedUser = tasks.find(task => task.id === taskId);
    setSelectedUser(selectedUser);
  }, [currentUserId, tasks])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editTask(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter task" required></Input>
      </FormGroup>
      <Button type="submit">Edit Task</Button>
      <Link to="/" className="btn btn-danger ml-2">Clear</Link>
    </Form>
  )
}