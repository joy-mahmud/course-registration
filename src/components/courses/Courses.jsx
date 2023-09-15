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

    useEffect(() => {

        fetch('courseData.json')
            .then(res => res.json())
            .then(data => setCardData(data))

    }, [])
    console.log(cardData)
    const handleSelectedCourses = (courseName,credithours)=>{
       let newSelectedCourses = selectedCourses
       let newcreditHours = creditHours+credithours
       
       if(newcreditHours<=20){
        if(newSelectedCourses.includes(courseName)){
            toast(`you have selected the ${courseName} course already`)
           }else{
            newSelectedCourses=[...newSelectedCourses,courseName]
            setCreditHours(newcreditHours)
           }
       }else{
        toast(' you can not add more courses,credit hours must be less than 20!')
    }
        
        setSelectedCourses(newSelectedCourses)
        // const handleCreditHours = ()=>{
        //     if(newcreditHours<=20){
                
        //     }else{
        //         toast('excedded')
        //     }
           
        // }
       
    }
//    const handleSelection = ()=>{

//    }


  

    return (
       
       <div>
        <ToastContainer></ToastContainer>
        <div className="flex gap-3">
            <div className="grid grid-cols-3 gap-4 w-3/4">
                {cardData.map((card, idx) => <Course key={idx} card={card} handleSelectedCourses={handleSelectedCourses}></Course>)}
            </div>
            <Sidebar selectedCourse={selectedCourses} creditHours={creditHours}></Sidebar>
            
        </div>
       </div>
    );
};

export default Courses;