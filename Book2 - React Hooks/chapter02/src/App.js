import logo from './logo.svg';
import './App.css';
import Products from './Products';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

function App() {

  const user  = {
    firstName : 'Bhabha',
    lastName : 'September',
    imageUrl: 'https://picsum.photos/200/300'
  };

  return (
    <div className="App">
      {/* =====- EXAMPLE1: -===== */}
      {/* Learn React Hooks

      <Products />
      <Products />
      <Products /> */}

      {/* =====- EXAMPLE2: -===== */}
      {/* <h1>
        Hello there, {formatName(user)} ! 👋😊
        <br/>
        <img src={user.imageUrl}></img>
      </h1> */}

      {/* =====- EXAMPLE3: -===== */}
      <Products />
    </div>
  );
}

export default App;
