import React from "react";
import { Card } from "react-bootstrap";
import { GrowingTree } from "./Components/GrowingTree";
import { getTreeName, getTreeDescription } from "./Components/AllTrees";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';


const Tree = () => {
    const testTreeName = getTreeName(3);

    return (
        <div>
            <Navigationbar title={'Tree'} />
            <div>
                <br/>
                <br/>
                <br/>
                <h5 className="text-center">{testTreeName}</h5>
                <GrowingTree />
                <GetDescription />
                <GetAchievmentInfo />
            </div>
            <Footer />
        </div>
    );
}

const GetAchievmentInfo = () => {
    return (
        <div>
            <div>
                <Card className="achievementBoxCardMain" >
                    <Card.Header className="achievementBoxCardHeader">How to achieve</Card.Header>
                    <Card.Body className="achievementBoxCardBody card-columns">
                        This tree is received when you have maintained an activity streak for 10 days.
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

const GetDescription = (props) => {
    const testTreeDescription = getTreeDescription(3);
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














