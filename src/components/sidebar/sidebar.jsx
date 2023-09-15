
import PropTypes from 'prop-types'
import SelectedCourses from '../selectedCourses/SelectedCourses';
const Sidebar = ({selectedCourse,creditHours,price}) => {
  
    let remainingHours = 20
    remainingHours = remainingHours-creditHours
    return (
        <div className="w-1/4">
            <div className="bg-white rounded-lg p-3">
                <h3 className="text-[#2f80ed] text-[18px] font-bold mb-1">Credit hours remaining:{(remainingHours>0)?' '+remainingHours:' '+0} hr</h3>
                <hr />
                <h3 className="text-[20px] font-bold mt-2 mb-4">Course Name</h3>
                {
                    selectedCourse.map((courseName,idx)=><SelectedCourses key={idx} courseName={courseName} idx={idx}></SelectedCourses>)
                }
                <hr />
                <p className='my-4'>Total Credit Hour : {creditHours} </p>
                <hr />
                <p className='mt-3'>Total Price : {price}</p>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    selectedCourse: PropTypes.array,
    creditHours:PropTypes.number,
    price:PropTypes.number
}

export default Sidebar;