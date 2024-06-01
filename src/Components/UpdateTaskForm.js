import React, {useState} from 'react';
import {Button, Input, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {closeModalActionCreator, updateTaskNameActionCreator} from "../redux/actionCreators";

const UpdateTaskForm = () => {
    const task = useSelector(state => state.modalWindow.data);
    const dispatch = useDispatch();
    const close = ()=>{
        dispatch(closeModalActionCreator());
    }

    const onUpdate = ()=>{
        dispatch(updateTaskNameActionCreator(newTaskName, task.id))
        close()
    }

    const[newTaskName, setNewTaskName] = useState(task?.name);

    return (
        <>
            <ModalHeader toggle={close}>Update task</ModalHeader>
            <ModalBody>
             <Input value={newTaskName}
                    onChange={(e)=>setNewTaskName(e.target.value)}
             />
            </ModalBody>
            <ModalFooter>
                <Button color="warning" onClick={onUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={close}>
                    Cancel
                </Button>
            </ModalFooter>
        </>
    );
};

export default UpdateTaskForm;