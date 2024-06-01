import {actionTypes} from "./actionCreators";

const initialState = {
    todoList: [
        {name: 'Do homework', id: 111, isDone: false},
        {name: 'Order pizza', id: 112, isDone: true},
        {name: 'Go for a walk', id: 113, isDone: false},
    ],
    appName: "Todo list",
    modalWindow: {
        isOpen: false,
        mode: null,
        data: null,
    }
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TASK:

            return {...state,
            todoList: state.todoList.filter((task) => task.id !== action.payload)
            };


        case actionTypes.CREATE_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };






        case actionTypes.CHANGE_TASK_STATUS:
            const newTodoList = state.todoList.map(task =>
                action.payload === task.id ? {...task, isDone: !task.isDone} : task
            );

            return {...state, todoList: newTodoList};
        case actionTypes.OPEN_MODAL:


                       return {...state, modalWindow: {
                           isOpen: true,
                               mode: action.payload.mode,
                               data: action.payload.data
                       }};

        case actionTypes.CLOSE_MODAL:


            return {
                ...state,
                modalWindow: {
                    isOpen: false,
                    mode: null,
                    data: null
                }};

        case actionTypes.UPDATE_TASK_NAME:
            const updatedTodoList = state.todoList.map(task =>
                task.id === action.payload.id ? {...task,name: action.payload.name}: task);

            return{
                ...state,
                todoList: updatedTodoList,
            }


        default:
            return state;


    }
}