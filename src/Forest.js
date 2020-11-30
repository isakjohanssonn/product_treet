import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import GrowingTree from "./Components/GrowingTree";
import { getTreeAge, getNumberTypesOfTrees, getTreeName, getTree } from "./Components/AllTrees";
import { Card } from "react-bootstrap";
import { UpcomingTree } from "./Components/UpcomingTree";
import { FullyGrownTree } from "./Components/FullyGrownTree";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import "./Forest.css"
import "./Components/GrowingTree.css"
import { Link } from "react-router-dom"


const FullyGrownTrees = (props) =>
{
    const current_tree = props.current_tree;
    var trees = [];

    for (var i = 0; i < current_tree; i++) {
        const age = getTreeAge(i);
        trees[i]=<div className="column" ><Link to={{pathname: '/tree', state: {tree: i, age: age}}}><FullyGrownTree current_tree={i} /></Link></div>
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
    const no_trees = getNumberTypesOfTrees();
    var trees = [];

    for (var i = 0; i < 3; i++) {
        trees[i]=<div className="column"><UpcomingTree current_tree={(current_tree+i) % (no_trees - 1)}/></div>
    }

    return (
        <Card className="ForestGrowingCard">
            <div className="row">
                {trees}
            </div>
        </Card>
    );
}

//TODO: To be replaced by OpenEHR getters.
export function forestParameters()
{
    const is_sick = false;
    const tree = 5;
    const age = 10;
    return [tree, age, is_sick];
}

const Forest = () => {
    var parameters = [];
    parameters = forestParameters();
    const tree = parameters[0];
    const current_age = parameters[1];
    const is_sick = parameters[2];
    const testTreeName = getTreeName(tree);

    return (
        <div>
            <Navigationbar title={'Forest'} />

            {/*This is only to prevent navbar from covering the text*/}
            <br></br><br></br> 
            <br></br><br></br>
            Growing
            <Card>
                <div className="Rtable">
                    <div className="Rtable-cell1 Rtable-cell--alignLeft"><GrowingTree age={current_age} current_tree={tree} is_sick={is_sick} is_animated={true}/></div>
                    <div className="Rtable-cell2 Rtable-cell--alignMiddle"><h5>{testTreeName}</h5></div>
                    <div className="Rtable-cell3 Rtable-cell--alignMiddle"><Link to={{pathname: '/tree', state: {tree: tree, age: current_age}}}><ArrowRight viewBox="0 0 16 16" className="pull-right arrowForest" fill="black" /></Link></div>
                </div>
            </Card>

            <br></br>

            Upcoming Trees
            <UpcomingTrees current_tree={tree}/>
            
            <br></br>

            Your fully grown trees
            <FullyGrownTrees current_tree={tree}/>

            <Footer />
        </div>
    );
}

export default Forest;