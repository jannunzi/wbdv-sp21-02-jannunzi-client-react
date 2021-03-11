import React from 'react'
import {Link, useParams} from "react-router-dom";

const TopicPills = () => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/ABC123`} className="nav-link ">
                    Topic 1
                </Link>
                <Link to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/ABC234`} className="nav-link ">
                    Topic 2
                </Link>
            </li>
        </ul>
    )
}

export default TopicPills