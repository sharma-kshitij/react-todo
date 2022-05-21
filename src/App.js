import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
