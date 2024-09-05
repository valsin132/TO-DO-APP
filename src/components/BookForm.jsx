import { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const BookForm = () => {
    const {addTask} = useContext(ToDoContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(title, author)
        setTitle('')
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" value={author}  onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="Add new To-Do" />
        </form>
     );
}
 
export default BookForm;