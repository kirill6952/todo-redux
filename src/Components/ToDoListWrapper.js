import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Task from "./Task";
import {openModalActionCreator} from "../redux/actionCreators";
import {modalTypes} from "./ModalWindow";

const ToDoListWrapper = () => {
    const toDoList = useSelector(state=> state.todoList)
    const dispatch = useDispatch();

    const openModalCreate = () => {
        dispatch(openModalActionCreator(modalTypes.create, null));
    };
    return (
        <div>
            <button onClick={openModalCreate}>Create Task</button>
            {toDoList.map(task => <Task task={task} key={task.id}/>)}
        </div>
    );
};

export default ToDoListWrapper;