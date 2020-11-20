import React from "react";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { GrowingTree } from "./Components/GrowingTree";
import { getTreeName } from "./Components/AllTrees";

import { Card } from "react-bootstrap";
import "./Components/GrowingTree.css"



//A view for showing a tree. Uses the components found in the folder Components.
const Forest = () => {
    const testTreeName = getTreeName(2);

    return (
        <div>
            Growing

            <Card className="ForestGrowingCard">
                <div class="row">
                    <div class="column"><GrowingTree /></div>
                    <div class="column"><h5 class="text-center">{testTreeName}</h5></div>
                    <div class="column1"><ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" /></div>
                </div>


            </Card>









            <br></br>

Upcomming Trees
            <Card className="ForestGrowingCard">
            <div class="row">
                    <div class="column"><GrowingTree /></div>
                    <div class="column"><GrowingTree /></div>
                    <div class="column"><GrowingTree /></div>
                </div>

            </Card>

Your fully grown Trees
            <Card className="ForestGrowingCard"></Card>


        </div>

    );
}

export default Forest;