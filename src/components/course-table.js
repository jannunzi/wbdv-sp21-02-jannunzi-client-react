import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div>
        <h2>Course Table</h2>
        <table className="table">
          <tbody>
          {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
          {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
          {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
          {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
