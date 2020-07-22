import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const TaskList = () => {
  const { tasks, removeTask } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
        <>
          {tasks.map(task => (
            <ListGroupItem className="d-flex" key={task.id}>
              <strong>{task.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${task.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeTask(task.id)} color="danger">Clear</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
          <h4 className="text-center">No Tasks Now</h4>
    </ListGroup>
  )
}

//17. task.name => GlobalState.js üzerinden stateleri alıyor
// 20. routing according to task id