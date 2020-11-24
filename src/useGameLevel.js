import React from "react";
import {useState} from "react";


const useGameLevel = () => {
    const [level, setLevel] = useState(3);

    return ({level});
}

export default useGameLevel;
