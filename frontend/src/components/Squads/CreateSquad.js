import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { createSquad, getOwnerSquads } from '../../store/ownerSquads';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function CreateSquad() {
    const user = useSelector(state => state.session.user)
    const squads = useSelector(state => Object.values(state.ownerSquads));
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [crew, setCrew] = useState("");
    const [code, setCode] = useState("");

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleCreateSquad = async (e) => {
        e.preventDefault();
        const data = {
            name: crew,
            userId: user.id,
        }
        await dispatch(createSquad(data))
        await dispatch(getOwnerSquads(user.id))
        await setCode(`${crew}-${user.id}-${squads[squads.length - 1].id}`)
        await setOpenSecond(true)
        setCrew("");
    }

    return (
        <>
            <div>
                <Button onClick={onOpenModal}>Create a squad</Button>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2>Enter a name for your crew</h2>
                    <input
                        className=""
                        value={crew}
                        onChange={e => setCrew(e.target.value)}
                    />
                    <div className="squad__container-create">
                        <Button type="submit" onClick={handleCreateSquad} variant="primary">Submit</Button>
                    </div>
                </Modal>
                <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                    <p>Second modal</p>
                    {code}
                </Modal>
            </div>
        </>
    )
}
