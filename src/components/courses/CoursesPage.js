import React from "react";
import { connect } from "react-redux";
import * as createCourseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed " + error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.proptypes = {
  createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(createCourseAction(course)),
    actions: bindActionCreators(createCourseAction, dispatch),
  };
}

// const mapDispatchToProps = {
//   createCourse: createCourseAction,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
