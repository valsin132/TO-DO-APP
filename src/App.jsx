import Navbar from "./components/Navbar";
import ToDoContextProvider from "./contexts/ToDoContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
        <ToDoContextProvider>
          <Navbar />
          <TaskForm />
          <TaskList />
        </ToDoContextProvider>  
    </div>
  );
}

export default App;
