import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types'

const Course = ({ card,handleSelectedCourses }) => {
    const { course_name, course_credit, price, details, image } = card
    return (
        <div className="bg-white  p-3  rounded-lg flex flex-col justify-between">
            <img className="w-full" src={image} alt="" />
            <h3 className="text-[18px] font-semibold my-4">{course_name}</h3>
            <p className="text-[14px] font-normal mb-3">{details}</p>

            <div className='flex justify-between'>
                <div className='flex gap-3  items-center'><FiDollarSign></FiDollarSign><p className='text-[14px] text-[#1C1B1B99] font-medium'>Price: {price}</p></div>
                <div className='flex gap-3  items-center'>
                    <BsBook></BsBook>
                    <p className='text-[14px] font-medium text-[#1C1B1B99]'>Credit: {course_credit} hrs</p>
                </div>
            </div>
            <button  onClick={()=>handleSelectedCourses(course_name,course_credit,price)} className='bg-[#2F80ED] text-white py-3 rounded-lg w-full mt-3'>select</button>
        </div>
    );
};

Course.propTypes = {
    card: PropTypes.object.isRequired,
    handleSelectedCourses: PropTypes.func.isRequired
}

export default Course;