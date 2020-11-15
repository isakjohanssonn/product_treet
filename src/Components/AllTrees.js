

import React, {useState} from "react"
import Oak1 from "../img/oak1.png";


const AllTrees = () => {
    const [tree, setTree] = useState(
        {
        spruce: {
            name:  "Spruce",
            desc: "Description",
            timeToGrow: 10,
            img: Oak1,
            picLive2: "",
            picLive3: "",
            picDead1: "",
            picDead2: "" 

        },
        oak: {
            name: "Oak",
            desc: "Description",
            timeToGrow: 20,
            picLive1: "",
            picLive2: "",
            picLive3: "",
            picDead1: "",
            picDead2: "" 
            },
        pine: {
            name:  "Spruce",
            desc: "Description",
            timeToGrow: 30,
            img: Oak1,
            picLive2: "",
            picLive3: "",
            picDead1: "",
            picDead2: "" 
            }
        }
    )
    return (tree)
}

export default AllTrees;



