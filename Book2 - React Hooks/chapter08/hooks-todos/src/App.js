// EXAMPLE APP 1:
// import React, { useContext, useReducer } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { UserContext } from "./index";
// import { Button } from "react-bootstrap";

// //EXAMPLE1:
// // function App() {
// //   return (
// //     <div className="App">
// //       <UserContext.Consumer>
// //         {(value) => <div>1. Received, {value}</div>}
// //       </UserContext.Consumer>
// //     </div>
// //   );
// // }
// //
// //
// //
//===========================================================
// //EXAMPLE3(below):

// const initialState = {
//   count: 0,
// };

// function App() {
//   //EXAMPLE1:
//   //<UserContext.Consumer>
//   //  {(value) => <div>1. Received, {value}</div>}
//   //</UserContext.Consumer>
//   //
//   //
//   //EXAMPLE2:
//   // const value = useContext(UserContext);
//   // return <div>2. Received : {value}</div>;
//   //
//   //
//   //EXAMPLE3:
//   const [state, dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//       Count: {state.count}
//       <br/>
//       <Button onClick={() => dispatch({type: 'increment'})}>Increment</Button>
//       <Button variant="secondary" onClick={() => dispatch({type: 'decrement'})}>Decrement</Button>
//       <Button variant="success" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
//     </div>
//   )
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return initialState;
//   }
// }

// export default App;

//==============================================================================================================
//EXAMPLE APP 2: TO-DO APP

import React, { useReducer } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

export const TodosContext = React.createContext();

const todosInitialState = {
  todos: [
    { id: 1, text: "read bible" },
    { id: 2, text: "finish hooks book" },
    { id: 3, text: "finish redux book" },
    { id: 4, text: "complete tutorial 7" },
    { id: 5, text: "work on own react app" },
  ],
};

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      const addedToDos = [...state.todos, newToDo];
      return { ...state, todos: addedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };

    default:
      return todosInitialState;
  }
}

export default App;
