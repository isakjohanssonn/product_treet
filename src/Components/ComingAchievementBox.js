import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./AchievementBox.css";
import { ArrowRight, Box } from 'react-bootstrap-icons'; 
import CollectibleRibbon from "./CollectibleRibbon.js";
import CollectibleMedal from "./CollectibleMedal.js";
import CollectibleTrophy from "./CollectibleTrophy.js";

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

export default function ComingAchievementBox() {

   return (
     <div>
 
 
       <div>
         {/* Creating the card/box to contain the achievements */}
         <Card class="comingAchievementBoxCardMain border-1" >
           <Card.Header class="achievementBoxCardHeader">Upcomming achievements</Card.Header>
           <Card.Body class="achievementBoxCardBody card-columns">
 
 
             {/*This are the achievements displayed */}
             <CollectibleRibbon number={5} />
             <CollectibleMedal number={10} />
             <CollectibleTrophy number={24} />
 
             {/* The arrow */}
             <ArrowRight viewBox="0 0 16 16" class="pull-right arrowAchivement"  fill="currentColor"/>
           </Card.Body>
         </Card>
       </div>
 
 
       </div>
       );
 }