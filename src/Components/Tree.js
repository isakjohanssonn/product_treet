import React from "react";
import Oak1 from "../img/oak1.png";

//TODO: Klassen träd. Ska innehålla info om vilken typ av träd
//det är och vad den nuvarande åldern är på trädet i dagar.
//Är en superklass till GrowingTree
// const Tree = (props) =>
// {
//     const treeType = {oak, spruce, pine};
//     const timeToGrow;
//     const currentAge;

//     //Hur och var ska vi spara bilderna på och infon om träden i olika stadier och av olika typer.
//     //Specialization of composition för de olika typerna av träd

//Börja med alltrees, growingtree, testa idn
//Använd getEHR samt nested objects (dictionaries)

// }

function Tree(props) {


    return (
        

        <div className="Tree">
            <h1>Hej</h1>
          
            <Oak1 />
         </div>
    );
}

function Oak(props)
{
    const {name, timeToGrow, description} = props;

    return (
        <div className="Oak">
            {name}
            {timeToGrow}
            <img src={Oak1}/>
        </div>
    );
  
}

function Spruce()
{
    return (
        <div
        name="Spruce"
        desc="Description"
        timeToGrow=""
        currentAge={0}
        picLive1=""
        picLive2=""
        picLive3=""
        picDead1=""
        picDead2="" />
    );
}

function Pine()
{
  
    return (
        <div
        name="Spruce"
        desc="Description"
        timeToGrow=""
        currentAge={0}
        picLive1=""
        picLive2=""
        picLive3=""
        picDead1=""
        picDead2="" />
    );
}

export default Oak;