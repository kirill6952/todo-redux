import {Button,  ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {closeModalActionCreator, deleteTaskActionCreator} from "../redux/actionCreators";

const DeleteTaskForm = () => {
    const task = useSelector(state => state.modalWindow.data);
    const dispatch = useDispatch();
    const close = ()=>{
        dispatch(closeModalActionCreator());
    }

    const onDelete = ()=>{
        dispatch(deleteTaskActionCreator(task.id))
        close()
    }



    return (
        <>
            <ModalHeader toggle={close}>Delete task</ModalHeader>
            <ModalBody>

                <h1>Are you sure you want to delete task: <b>{task.name}</b></h1>

            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={onDelete}>
                    Delete
                </Button>{' '}
                <Button color="secondary" onClick={close}>
                    Cancel
                </Button>
            </ModalFooter>
        </>
    );
};

export default DeleteTaskForm;