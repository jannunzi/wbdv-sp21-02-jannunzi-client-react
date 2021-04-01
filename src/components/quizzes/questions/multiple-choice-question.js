import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== yourAnswer &&
                    <i className="fas fa-times"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <p>{question.correct}</p>
            <p></p>
            <p>{question.type}</p>
        </div>
    )
}

export default MultipleChoiceQuestion