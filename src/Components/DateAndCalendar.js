import React from "react";
import {FaCalendarAlt} from 'react-icons/fa';
import "./DateAndCalendar.css";

export default function DateAndCalendar() {
    const date = new Date();
    var temp_date = new Date();

    if(date.getDate()<10){
        temp_date = [0, date.getDate()].join("");
    }else{
        temp_date = date.getDate();
    }

    const time = [date.getFullYear(), date.getMonth()+1, temp_date].join("-");

    return (
        <div className="top">
            {time}
            <FaCalendarAlt/>
        </div>
    )
}
