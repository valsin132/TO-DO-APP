import Navbar from "./components/Navbar";
import ToDoContextProvider from "./contexts/ToDoContext";
import BookList from "./components/Knygos";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
        <ToDoContextProvider>
          <Navbar />
          <BookForm />
          <BookList />
        </ToDoContextProvider>  
    </div>
  );
}

export default App;
