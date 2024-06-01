import task from "../Components/Task";

export const actionTypes =  {
    'CHANGE_TASK_STATUS': 'CHANGE_TASK_STATUS',
    'DELETE_TASK':'DELETE_TASK',
    'OPEN_MODAL': 'OPEN_MODAL',
    'CLOSE_MODAL': 'CLOSE_MODAL',
    'UPDATE_TASK_NAME': 'UPDATE_TASK_NAME',
    'CREATE_TASK':'CREATE_TASK',
}

export const changeStatusActionCreator = (id) => {
    return {type: actionTypes.CHANGE_TASK_STATUS,payload: id};
}

export const openModalActionCreator = (mode,data) => {
    return {type: actionTypes.OPEN_MODAL, payload: {mode,data}};
}

export const closeModalActionCreator = () => {
    return {type: actionTypes.CLOSE_MODAL};
}

export const updateTaskNameActionCreator = (name,id) => {
    return {type: actionTypes.UPDATE_TASK_NAME,payload: {name,id}};
}

export const deleteTaskActionCreator = (id) => {
    return {type: actionTypes.DELETE_TASK,payload: id};
}

export const createTaskActionCreator = (task) => {
    return {type: actionTypes.CREATE_TASK, payload: task};
}