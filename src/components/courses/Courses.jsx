import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Sidebar from "../sidebar/sidebar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Courses = () => {
    const [cardData, setCardData] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])
    const [creditHours,setCreditHours] = useState(0)
    const [CreditPrice,setPrice] = useState(0)

    useEffect(() => {

        fetch('courseData.json')
            .then(res => res.json())
            .then(data => setCardData(data))

    }, [])
    console.log(cardData)
    const handleSelectedCourses = (courseName,credithours,price)=>{
       let newSelectedCourses = selectedCourses
       let newcreditHours = creditHours+credithours
       let newPrice = CreditPrice + price
       
       if(newcreditHours<=20){
        if(newSelectedCourses.includes(courseName)){
            toast(`you have selected the ${courseName} course already`)
           }else{
            newSelectedCourses=[...newSelectedCourses,courseName]
            setCreditHours(newcreditHours)
            setPrice(newPrice)
           }
       }else{
        toast(' you can not add more courses, Remaining hours must not be less than 0 and credit hours must be less than 20!')
    }
        
        setSelectedCourses(newSelectedCourses)
     
       
    }


    return (
       
       <div>
        <ToastContainer></ToastContainer>
        <div className="flex gap-3">
            <div className="grid grid-cols-3 gap-4 w-3/4">
                {cardData.map((card, idx) => <Course key={idx} card={card} handleSelectedCourses={handleSelectedCourses}></Course>)}
            </div>
            <Sidebar selectedCourse={selectedCourses} creditHours={creditHours} price={CreditPrice}></Sidebar>
            
        </div>
       </div>
    );
};

export default Courses;