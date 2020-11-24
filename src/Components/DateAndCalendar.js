import React from "react";
import {FaCalendarAlt} from 'react-icons/fa';
import "./DateAndCalendar.css";

export default function DateAndCalendar() {
    const date = new Date();
    const time = [date.getFullYear(), date.getMonth(), date.getDate()].join("-");

    return (
        <div className="top">
            {time}
            <FaCalendarAlt/>
        </div>
    )
}
