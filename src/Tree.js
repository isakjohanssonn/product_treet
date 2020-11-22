import React from "react";
import { ProgressBar } from "react-bootstrap";
import { GrowingTree, GetDescription } from "./Components/GrowingTree";
import { getTreeName } from "./Components/AllTrees";
import Navigationbar from './Components/Navigationbar';
import { Card } from "react-bootstrap";
import Footer from './Components/Footer';


//A view for showing a tree. Uses the components found in the folder Components.
const Tree = () => {
    const testTreeName = getTreeName(2);

    return (
        <div>
            <Navigationbar title={'Tree'} />
            <div>
            <br></br>
            <br></br>
            <br></br>
                <h5 class="text-center">{testTreeName}</h5>
                <GrowingTree />
                <GetDescription />
                {/*<TreeInfo>
                <AchievmentInfo/>
                  </TreeInfo>*/}
            </div>
            <Footer />
        </div>

    );
}

export default Tree;














