import React, {useState} from 'react';
import UpdateTaskForm from "./UpdateTaskForm";
import {Modal} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {closeModalActionCreator} from "../redux/actionCreators";
import DeleteTaskForm from "./DeleteTaskForm";
import CreateTaskForm from "./CreateTaskForm";

export const modalTypes = {
    update: 'update',
    delete: 'delete',
    create: 'create'
}



const ModalWindow = () => {
    const modal = useSelector(state => state.modalWindow.isOpen);
    const mode = useSelector(state => state.modalWindow.mode);
    const dispatch = useDispatch();

    const close = ()=>{
        dispatch(closeModalActionCreator());
    }
    // const [modal, setModal] = useState(false);
    //
    // const toggle = () => setModal(!modal);
    return (
        <Modal isOpen={modal} toggle={close} >
            {mode === modalTypes.update && <UpdateTaskForm/>}
            {mode === modalTypes.delete && <DeleteTaskForm/>}
            {mode === modalTypes.create && <CreateTaskForm/>}
          {/*<UpdateTaskForm />*/}

        </Modal>
    );
};

export default ModalWindow;