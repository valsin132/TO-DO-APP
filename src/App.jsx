import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import ToDoContextProvider from "./contexts/ToDoContext";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
import { useContext } from 'react';

function App() {
  return (
      <ThemeContextProvider>
        <ToDoContextProvider>
          <AppContent />
        </ToDoContextProvider>
      </ThemeContextProvider>  
  );
}

function AppContent() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='app-wrapper' style={{ background: theme.bg }}>
      <div className='app'>
        <Navbar />
        <TaskForm />
        <TaskList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
