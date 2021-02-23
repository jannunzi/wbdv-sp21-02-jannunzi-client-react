import React from 'react'
import {Link} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";

const store = createStore(moduleReducer)

const CourseEditor = ({history}) =>
    <Provider store={store}>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <ModuleList/>
        </div>
    </Provider>

export default CourseEditor
