
import PropTypes from 'prop-types'
const SelectedCourses = ({courseName,idx}) => {
    return (
        <div>
            <p>{courseName&&(idx+1)+'.'} {courseName}</p>
        </div>
    );
};
SelectedCourses.propTypes={
    courseName:PropTypes.string,
    idx:PropTypes.number
}

export default SelectedCourses;