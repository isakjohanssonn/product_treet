import React from "react";
import { ProgressBar } from "react-bootstrap";
import { GrowingTree, GetDescription } from "./Components/GrowingTree";
import { getTreeName } from "./Components/AllTrees";

import { Card } from "react-bootstrap";



//A view for showing a tree. Uses the components found in the folder Components.
const Tree = () => {
    const testTreeName = getTreeName(2);

    return (
        <div>
            <div>
                <h5 class="text-center">{testTreeName}</h5>
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














