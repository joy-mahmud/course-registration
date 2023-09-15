
import PropTypes from 'prop-types'
import SelectedCourses from '../selectedCourses/SelectedCourses';
const Sidebar = ({selectedCourse,creditHours}) => {
  
    
    return (
        <div className="w-1/4">
            <div className="bg-white rounded-lg p-3">
                <h3 className="text-[#2f80ed] text-[18px] font-bold">Remaining hours:</h3>
                <hr />
                <h3 className="text-[20px] font-bold">Course Name</h3>
                {
                    selectedCourse.map((courseName,idx)=><SelectedCourses key={idx} courseName={courseName} idx={idx}></SelectedCourses>)
                }
                <hr />
                <p>Total Credit Hour :{creditHours} </p>
                <hr />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    selectedCourse: PropTypes.array,
    creditHours:PropTypes.number
}

export default Sidebar;