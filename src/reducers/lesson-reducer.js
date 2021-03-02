const initialState = {
    lessons: [
        {_id: "123", title: "Lesson 111"},
        {_id: "234", title: "Lesson 234"},
        {_id: "345", title: "Lesson 345"}
    ]
}

const lessonReducer = (state=initialState, action) => {
    return state
}

export default lessonReducer