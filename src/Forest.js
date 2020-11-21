import React from "react";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { GrowingTree } from "./Components/GrowingTree";
import { getTreeName } from "./Components/AllTrees";

import { Card } from "react-bootstrap";
import "./Components/GrowingTree.css"
import { OtherTree } from "./Components/OtherTree";
import "./Forest.css"
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';


//A view for showing a tree. Uses the components found in the folder Components.
const Forest = () => {
    const testTreeName = getTreeName(2);

    return (
        
        <div>
         <Navigationbar title={'Forest'} />
            Growing
            <Card>
                <div class="Rtable">
                    <div class="Rtable-cell Rtable-cell--alignLeft"><GrowingTree/></div>
                    <div class="Rtable-cell Rtable-cell--alignMiddle Rtable-cell--alignCenter"><h5>{testTreeName}</h5></div>
                    <div class="Rtable-cell Rtable-cell--alignRight"><ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" /></div>
                </div>
            </Card>

            <br></br>

            Upcoming Trees
            <Card className="ForestGrowingCard">
                <div class="row">
                    <div class="column"><OtherTree current_tree={3} age={0} isUpcoming={true} /></div>
                    <div class="column"><OtherTree current_tree={4} age={0} isUpcoming={true} /></div>
                    <div class="column"><OtherTree current_tree={5} age={0} isUpcoming={true} /></div>
                </div>

            </Card>

            Your fully grown trees
            <Card className="ForestGrowingCard">
                <div class="row">
                    <div class="column"><OtherTree current_tree={0} age={30} isUpcoming={false} /></div>
                    <div class="column"><OtherTree current_tree={1} age={30} isUpcoming={false} /></div>
                </div>
            </Card>

            <Footer />
        </div>

    );
}

export default Forest;