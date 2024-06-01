import React, { useState } from 'react';
import { Button, Input, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch } from "react-redux";
import { closeModalActionCreator, createTaskActionCreator } from "../redux/actionCreators";

const CreateTaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModalActionCreator());
    };

    const onCreate = () => {
        if (taskName.trim()) {
            const newTask = { name: taskName, id: Date.now(), isDone: false };
            dispatch(createTaskActionCreator(newTask));
            close();
        }
    };

    return (
        <>
            <ModalHeader toggle={close}>Create task</ModalHeader>
            <ModalBody>
                <Input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onCreate}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={close}>
                    Cancel
                </Button>
            </ModalFooter>
        </>
    );
};

export default CreateTaskForm;