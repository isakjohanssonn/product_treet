import React, { useState } from "react";
import { Card } from "react-bootstrap"
import "./AchievementBox.css"



export default function AchievementBox() {

  return (
    <div>


        <div>
          <Card border="secondary" className="achievementBoxCardMain" >
            <Card.Header className="achievementBoxCardHeader">Your latest achievements</Card.Header>
            <Card.Body className="achievementBoxCardBody">

              {/* Istället för hårdkodade achievements, hämta component för varje relevant achievement */}
              <Card border="secondary" className="achievementBoxSecondary">
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
              </Card>

            </Card.Body>
          </Card>
        </div>


      </div>
      );
}