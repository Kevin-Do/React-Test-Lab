import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
    constructor(props, context) {
        super(props,context);

        this.state = {
            course: {title: ""}
        };
    
        //due to the "this context" being the dom <input> 
        //this.state is undefined in onTitleChange
        //ES6 does not autobind so we must do it ourselves
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        //this gives the two event handler functions binded to our component and our local state
        //this being our CoursePage component
        //bind in render impacts performance
    }

onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
}

onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
    //injected action prop
}
courseRow(course, index) {
    return <div key = {index}> {course.title}</div>;
}
    render() {
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2> Add Course</h2>
                <input
                    type = "text"
                    onChange = {this.onTitleChange}
                    value = {this.state.course.title}/>
                
                <input
                    type = "submit"
                    value = "Save"
                    onClick = {this.onClickSave}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses //this means i would like to access by this.props.courses
        // the data within the state of our store named by root reducer
        // ownProps are the props of our component
    };
}

export default connect(mapStateToProps)(CoursesPage);
//without mapDispachToProps we can use this.props.dispatch handed in from the connect function in our render