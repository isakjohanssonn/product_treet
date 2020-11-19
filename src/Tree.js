import React from "react";
import { ProgressBar } from "react-bootstrap";
import { GrowingTree, GetDescription } from "./Components/GrowingTree";

import { Card } from "react-bootstrap";



//A view for showing a tree. Uses the components found in the folder Components.
const Tree = () =>  {

    return (
        <div>
           <div>
           <GrowingTree />
            <GetDescription />
            {/*<TreeInfo>
            <AchievmentInfo/>
            </TreeInfo>*/}
        



        </div>
        </div>

);
}

export default Tree;











        


