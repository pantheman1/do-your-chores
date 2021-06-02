import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { toggleIsComplete } from '../../store/chores';

export default function CompletedChoreButton({ chore, complete, setComplete }) {
    const dispatch = useDispatch();
    const { zoneId } = useParams();

    // This function is ran when the button is clicked and sets the status to complete and also triggers the update to the database for isComplete
    const toggleComplete = async (e) => {
        const data = {
            chore,
            zoneId
        }
        await dispatch(toggleIsComplete(chore))
        setComplete(!complete)
    }

    // This function is ran when the button is clicked and sets the class to selected when true
    const getButtonHTML = () => {
        return "isComplete-btn " + (chore?.isComplete ? " selected" : "")
    }

    return (
        <button className={getButtonHTML()} onClick={toggleComplete}><i className="far fa-check-circle"></i></button>
    )

}