import React, { useState } from "react";
import { Card } from "react-bootstrap"
import "./AchievementBox.css"
import { ArrowRight } from 'react-bootstrap-icons';
import CollectibleRibbon from "./CollectibleRibbon.js";
import CollectibleMedal from "./CollectibleMedal.js";
import CollectibleTrophy from "./CollectibleTrophy.js";



export default function AchievementBox() {

  return (
    <div>


      <div>
        <Card class="achievementBoxCardMain border-0" >
          <Card.Header class="achievementBoxCardHeader">Your latest achievements</Card.Header>
          <Card.Body class="achievementBoxCardBody card-columns">

            {/* Istället för hårdkodade achievements, hämta component för varje relevant achievement */}
            {/* <Card border="secondary" className="achievementBoxSecondary">
              <img src="./cartoon-tree.png" class="card-img-top" alt="..."></img>
                <Card.Body>
                  <Card.Text>
                    Coolt träd
          </Card.Text>
                </Card.Body>
              </Card>
              
              <Card border="secondary" className="achievementBoxSecondary">
              <img src="..." class="card-img-top" alt="..."></img>
                <Card.Body>
                  <Card.Text>
                    Coolt träd
          </Card.Text>
                </Card.Body>
              </Card>

              <Card border="secondary" className="achievementBoxSecondary">
              <img src="..." class="card-img-top" alt="..."></img>
                <Card.Body>
                  <Card.Text>
                    Coolt träd
          </Card.Text>
                </Card.Body>
              </Card> */}

            <CollectibleRibbon number={5} />
            <CollectibleMedal number={10} />
            <CollectibleTrophy number={24} />
            <ArrowRight viewBox="0 0 16 16" class="pull-right arrowAchivement height-center"  fill="currentColor"/>
            {/* <svg viewBox="0 0 16 16" class="bi bi-arrow-right pull-right arrowAchivement" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg> */}
          </Card.Body>
        </Card>
      </div>


      </div>
      );
}