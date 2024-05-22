import { useState } from 'react'
import { Button,Form,  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

function App() {
  const [todoInput, setTodoInput] = useState("");
  const[todos, setTodos]=useState([]);

  const addTodo = ()=>{
    setTodos([...todos,todoInput]);
    setTodoInput("");
  }

  const ListItem=styled.li`
  cursor:pointer;
  `;

  return (
    <>
      <h1>TO DO LIST</h1>
      <Form>
      <Form.Group className="form-group" controlId="exampleForm.ControlInput1">
        <Form.Control  
        type="text" 
        placeholder="Add task to to do list..." 
        onChange={(e)=>setTodoInput(e.target.value)}
        value={todoInput}
        />
        <Button onClick={addTodo} variant='primary'>Create</Button>
      </Form.Group>
      </Form>
      <ul>
      {todos.map((todo,index) => (
        <ListItem key={index} onClick={()=>{setTodos(
          todos.filter((filterTodo) => filterTodo !== todo));}}>
          {todo}
        </ListItem>
      ))}
      </ul>
    </>
  )
}

export default App
