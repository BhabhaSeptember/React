// CLASS-BASED COMPONENT
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// class App extends React.Component {
//   state = { requested: ' '};

//   render() {
//     return(
//       <div>
//         <Button variant="link" onClick={()=>this.setState({
//           requested:'https://jsonplaceholder.typicode.com/posts'
//         })}>Posts</Button>

//         <Button variant="link" onClick={()=>this.setState({
//           requested: 'https://jsonplaceholder.typicode.com/todos'
//         })}>Todos</Button>
//         <br/>
//         Requested: {this.state.requested}
//       </div>
//     )
//   }
// }
// export default App
//============================================================================
//************************************************************************** */
//============================================================================


//FUNCTION-BASED COMPONENT
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch';
import Users from './Users';

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [requested, setRequested] = useState(postsUrl);
  // const [data, setData] = useState([]);
  const data = useFetch(requested);

  // useEffect( ()=> {
  //   fetch(requested)
  //   .then(response => response.json())
  //   .then(data => setData(data))
  // }, [requested]);

  return (
    <div>
      <h1><u>Users</u></h1>
      <Users/>
      <hr/>
      <Button variant="link" onClick={()=>setRequested(postsUrl)}>Posts</Button>
      <Button variant="link" onClick={()=>setRequested(todosUrl)}>Todos</Button>
      
      <br/>
      <br/>
      <b>Requested:</b> <u>{ requested }</u>
      <br/>
      <br/>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
