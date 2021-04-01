import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/courses">
                <CourseManager/>
            </Route>
            <Route path="/courses/:courseId/quizzes" exact={true}>
                <QuizzesList/>
            </Route>
            <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                <Quiz/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
