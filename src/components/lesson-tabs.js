import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ]
    }) => {
    const {courseId, moduleId} = useParams();
    return(
    <div>
        <h2>Lessons {courseId} {moduleId}</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            item={lesson}/>
                    </li>
                )
            }
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({})

export default connect(stpm, dtpm)(LessonTabs)