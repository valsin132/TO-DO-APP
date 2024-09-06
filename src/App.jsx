import Navbar from "./components/Navbar";
import ToDoContextProvider from "./contexts/ToDoContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
        <ToDoContextProvider>
          <Navbar />
          <TaskForm />
          <TaskList />
          <Footer />
        </ToDoContextProvider>  
    </div>
  );
}

export default App;
