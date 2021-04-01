import React from "react";

const TrueFalseQuestion = ({question}) => {
    return(
        <div>
            <h5>{question.question}</h5>
            <label><input type="radio" name={question._id}/> True</label>
            <label><input type="radio" name={question._id}/> False</label>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion