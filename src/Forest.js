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

const FullyGrownTrees = (props) =>
{

    const current_tree = props.current_tree;
    var trees = [];

    for (var i = 0; i < current_tree; i++) {
        trees[i]=<div className="column"><FullyGrownTree current_tree={i}/></div>
    }

    return (
        <Card className="ForestGrowingCard">
            <div className="row">
                {trees}
            </div>
        </Card>
    );
}


const UpcomingTrees = (props) =>
{
    const current_tree = props.current_tree;
    const no_trees = props.no_trees;
    var trees = [];

    for (var i = 0; i < 3; i++) {
        trees[i]=<div className="column"><UpcomingTree current_tree={(current_tree+i) % no_trees}/></div>
    }

    return (
        <Card className="ForestGrowingCard">
            <div className="row">
                {trees}
            </div>
        </Card>
    );
}


const Forest = () => {
    //Ta fram current tree siffran
    const tree = 5;
    const no_trees = 5;
    const testTreeName = getTreeName(tree);

    return (
        <div>
            <Navigationbar title={'Forest'} />
            <br></br><br></br>
            Growing
            <Card>
                <div className="Rtable">
                    <div className="Rtable-cell1 Rtable-cell--alignLeft"><GrowingTree age={30} current_tree={tree}/></div>
                    <div className="Rtable-cell2 Rtable-cell--alignMiddle Rtable-cell--alignCenter"><h5>{testTreeName}</h5></div>
                    <div className="Rtable-cell2 Rtable-cell--alignRight"><ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" /></div>
                </div>
            </Card>

            <br></br>

            Upcoming Trees
            <UpcomingTrees current_tree={tree} no_trees={no_trees}/>

            Your fully grown trees
            <FullyGrownTrees current_tree={tree}/>

            <Footer />
        </div>
    );
}

export default Forest;