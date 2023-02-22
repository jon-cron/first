import './App.css';
import ExpenseItem from "./components/ExpenseItem.js";
// NOTE upon starting the app open the terminal and run npm install
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello world</h1>
      <ExpenseItem/>
      </header>
    </div>
  );
}

export default App;
