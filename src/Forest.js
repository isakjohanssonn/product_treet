import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import GrowingTree from "./Components/GrowingTree";
import { getTreeAge, getNumberTypesOfTrees, getTreeName, getTree } from "./Components/AllTrees";
import { Card } from "react-bootstrap";
import { UpcomingTree } from "./Components/UpcomingTree";
import { FullyGrownTree } from "./Components/FullyGrownTree";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import './Global.css';
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
        <Card className="ForestGrowingCard standardBorder">
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
        <Card className="ForestGrowingCard standardBorder">
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
    const tree = 3;
    const age = 22;
    return [tree, age, is_sick];
}


//Forest ska ta in parametrar som kommer från main. Main hämtar från ehr och om åldern är över trädets ålder så ändra uppdatera nuvarande träd.
const Forest = (props) => {
    const {is_sick, tree, current_age} = props;

    console.log("har vi nan text");
    console.log("is sick ar nu ", is_sick, " och tree ar ", tree, " current age ", current_age);
    // var parameters = [];
    // parameters = forestParameters();
    // const tree = parameters[0];
    // const current_age = parameters[1];
    // const is_sick = parameters[2];
    const testTreeName = getTreeName(tree);

    return (
        <div>
            <Navigationbar title={'Forest'} />

            {/*This is only to prevent navbar from covering the text*/}
            <br></br><br></br> 
            <br></br><br></br>
            <div className = "scrollable">
            <h4>Growing</h4>
            <Card className = "standardBorder">
                <div className="Rtable">
                    <div className="Rtable-cell1 Rtable-cell--alignLeft"><GrowingTree age={current_age} current_tree={tree} is_sick={is_sick} is_animated={true}/></div>
                    <div className="Rtable-cell2 Rtable-cell--alignMiddle"><h4>{testTreeName}</h4></div>
                    <div className="Rtable-cell3 Rtable-cell--alignMiddle"><Link to={{pathname: '/tree', state: {tree: tree, age: current_age}}}><ArrowRight viewBox="0 0 16 16" className="pull-right arrowForest" fill="black" /></Link></div>
                </div>
            </Card>

            <br></br>

            <h4>Upcoming Trees</h4>
            <UpcomingTrees current_tree={tree}/>
            
            <br></br>

            <h4>Your fully grown trees</h4>
            <FullyGrownTrees current_tree={tree}/>
            </div>
            <Footer />
        </div>
    );
}

export default Forest;