import './App.css';
import {connect} from "react-redux";
import ToDoListWrapper from "./Components/ToDoListWrapper";
import 'bootstrap/dist/css/bootstrap.css'
import ModalWindow from "./Components/ModalWindow";

function App(props) {
    const {appTitle} = props
    return (
        <div className="App">

            <h1>{appTitle}</h1>
            <ToDoListWrapper/>
            <ModalWindow/>

        </div>
    );
}

const mapStateToProps = (state) => ({
    appTitle: state.appName
})


export default connect(mapStateToProps)(App);
