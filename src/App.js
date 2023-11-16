import logo from './logo.svg';
import './App.css';
import Todos from './componants/Todos';
const todos = [{id:101,text:"first todo"},{id:102,text:"second todo"}]
function App() {
  return (
    <div className="App">
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
