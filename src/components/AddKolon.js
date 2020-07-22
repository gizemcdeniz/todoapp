import React from 'react'
import {Link} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const AddKolon = () => {
    return (
       <Form className="ml-2">
           <FormGroup>
               <Label>Name</Label>
                   <Input type="text" placeholder="Enter Task"></Input>
           </FormGroup>
           <Button type="submit">Add Task</Button>
           <Link to="/" className="btn btn-danger ml-2">Clear</Link>
       </Form>
    )
}