import React, { useState, Component } from "react";
import Oak from "./Tree.js"

const TreeStage = (props) =>
{
    //Stages for age/health of tree
    const [stageOne, setstageOne] = useState(true);
    const [stageTwo, setstageTwo] = useState(false);
    const [stageThree, setstageThree] = useState(false);
    const [stageSick, setstageSick] = useState(false);
    
    //TODO: Lägg in bilder och skapa en progress bar som används här.
return (
        <div class="skaparTrad">
            <Oak name="Oak" timeToGrow={24} description="Lorem Ipsum"/>
        </div>
);
    if (stageOne && !(stageSick))
    {
        return
    }
    else if (stageTwo && !(stageSick))
    {
        return
    }
    else if (stageThree && !(stageSick))
    {
        return
    }
    else if (stageOne && stageSick)
    {
        return
    }
    else if (!stageOne && stageSick)
    {
        return
    }
}

export default TreeStage;