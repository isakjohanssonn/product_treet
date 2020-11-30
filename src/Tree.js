import React from "react";
import { Card } from "react-bootstrap";
import GrowingTree from "./Components/GrowingTree";
import { getTreeName, getTreeAge, getTreeDescription } from "./Components/AllTrees";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import { useLocation} from "react-router-dom";

const Tree = () => {
    const location = useLocation();
    const tree = location.state.tree;
    const current_age = location.state.age;
    const testTreeName = getTreeName(tree);

    return (
        <div>
            <Navigationbar title={'Tree'} />
            <div>
            <br></br><br></br>
            <br></br><br></br>
            
                <h5 className="text-center">{testTreeName}</h5>
                <GrowingTree age={current_age} current_tree={tree} is_animated={true}/>
                <GetDescription tree={tree}/>
                <GetAchievmentInfo tree={tree}/>
            </div>
            <Footer />
        </div>
    );
}

const GetAchievmentInfo = (props) => {
  const tree = props.tree;
  const age = getTreeAge(tree); 
  return (
        <div>
            <div>
                <Card className="achievementBoxCardMain" >
                    <Card.Header className="achievementBoxCardHeader">How to achieve</Card.Header>
                    <Card.Body className="achievementBoxCardBody card-columns">
                      This tree is received when you have maintained an activity streak for {age} days.
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

const GetDescription = (props) => {
    const tree = props.tree;
    const testTreeDescription = getTreeDescription(tree);
    return (
      <div>
        <div>
          <Card className="achievementBoxCardMain" >
            <Card.Header className="achievementBoxCardHeader">Tree Info</Card.Header>
            <Card.Body className="achievementBoxCardBody card-columns">
              {testTreeDescription}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }

export default Tree;














