import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
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
  </div>

export default CourseEditor
