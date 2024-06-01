import React from 'react';
import { useDispatch } from "react-redux";
import { changeStatusActionCreator, openModalActionCreator } from "../redux/actionCreators";
import { modalTypes } from "./ModalWindow";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const changeStatus = () => {
        dispatch(changeStatusActionCreator(task.id));
    };

    const openModalUpdate = () => {
        dispatch(openModalActionCreator(modalTypes.update, task));
    };

    const openModalDelete = () => {
        dispatch(openModalActionCreator(modalTypes.delete, task));
    };

    return (
        <div className="task-container">
            <span style={task.isDone ? { textDecoration: "line-through" } : {}}>{task.name}</span>
            <button onClick={changeStatus}>
                {task.isDone ? 'Done' : 'Undone'}
            </button>
            <button onClick={openModalUpdate}>Update</button>
            <button onClick={openModalDelete}>Delete</button>
        </div>
    );
};

export default Task;
