import React from "react";

import "./styles.css";

class CoursePreview extends React.Component {
    render() {
        const { coursePreview } = this.props;
        console.log(coursePreview);
        if (coursePreview.courseId === "7") {
            console.log(coursePreview.courseName);
        }

        return (
            <div id="wrapper4">
                <div className="course-preview__bg-image2">
                    <table className="course-preview2">
                        <tr key={coursePreview.courseId}>
                            <td className="name_cell2">
                                {coursePreview.courseName}
                            </td>
                            <td className="university_cell2">
                                {coursePreview.courseUniversity}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default CoursePreview;