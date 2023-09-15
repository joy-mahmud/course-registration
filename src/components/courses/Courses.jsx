import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch('courseData.json')
            .then(res => res.json())
            .then(data => setCardData(data))

    }, [])
    console.log(cardData)
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {cardData.map((card, idx) => <Course key={idx} card={card}></Course>)}
            </div>
            
        </div>
    );
};

export default Courses;