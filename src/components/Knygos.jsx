import {useContext} from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {tasks} = useContext(ToDoContext);
    return tasks.length
    ? (
        <div className='book-list'>
            <ul>
                {tasks.map(task => {
                    return (
                        <BookDetails task={task} key={task.id} />
                    )
                })}
            </ul>
        </div>
    )
    : (
        <div className="empty">Seems lonely in here, what are you up to?</div>
    );
}
 
export default BookList;