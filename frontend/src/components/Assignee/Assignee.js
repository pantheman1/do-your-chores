import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';



const Assignee = ({ user }) => {
    const [assignee, setAssignee] = useState('')

    const handleSelectUser = (e) => {
        setAssignee(e.target.value)
    }

    return (
        <div>
            <div className="assignee-btn">
                <label>Who's doing this Chore?</label>
                {/* This needs to be updated to ONLY those people who are a part of this zone or possibly squad */}
                {/* <select
                    onSelect={handleSelectUser}
                >
                    {allUsers.map(user => (
                        <option key={nanoid()}>{user.name}</option>
                    ))}
                </select> */}
            </div>
        </div>
    )
}


export default Assignee;