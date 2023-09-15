
const Course = ({card}) => {
    const {course_name,course_credit,price,details,image} = card
    return (
        <div className="bg-white  p-2  border-2">
            <img src={image} alt="" />   
            <h3>{course_name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default Course;