import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { GrowingTree } from "./Components/GrowingTree";
import { getTreeName } from "./Components/AllTrees";
import { Card } from "react-bootstrap";
import { UpcomingTree } from "./Components/UpcomingTree";
import { FullyGrownTree } from "./Components/FullyGrownTree";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import "./Forest.css"
import "./Components/GrowingTree.css"

const Forest = () => {
    const testTreeName = getTreeName(3);

    return (
        <div>
            <Navigationbar title={'Forest'} />
            <br></br><br></br>
            Growing
            <Card>
                <div class="Rtable">
                    <div class="Rtable-cell1 Rtable-cell--alignLeft"><GrowingTree /></div>
                    <div class="Rtable-cell2 Rtable-cell--alignMiddle Rtable-cell--alignCenter"><h5>{testTreeName}</h5></div>
                    <div class="Rtable-cell2 Rtable-cell--alignRight"><ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" /></div>
                </div>
            </Card>

            <br></br>

            Upcoming Trees
            <Card className="ForestGrowingCard">
                <div class="row">
                    <div class="column"><UpcomingTree current_tree={3} age={0} isUpcoming={true} /></div>
                    <div class="column"><UpcomingTree current_tree={4} age={0} isUpcoming={true} /></div>
                    <div class="column"><UpcomingTree current_tree={5} age={0} isUpcoming={true} /></div>
                    <div class="column"><UpcomingTree current_tree={0} age={0} isUpcoming={true} /></div>
                    <div class="column"><UpcomingTree current_tree={1} age={0} isUpcoming={true} /></div>
                </div>

            </Card>

            Your fully grown trees
            <Card className="ForestGrowingCard">
                <div class="row">
                    <div class="column"><FullyGrownTree current_tree={0} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={1} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={2} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={3} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={4} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={5} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={0} age={30} isUpcoming={false} /></div>
                    <div class="column"><FullyGrownTree current_tree={1} age={30} isUpcoming={false} /></div>
                </div>
            </Card>

            <Footer />
        </div>
    );
}

export default Forest;