import React, { useState } from "react"
import Oak1 from "../img/oak1.svg";
import Oak2 from "../img/mightyoak.png";
import Oak3 from "../img/sicktree.png"
import Spruce1 from "../img/oak1.svg";
import Spruce2 from "../img/pine_old.jpg";
import Spruce3 from "../img/jaja.png"
import Spruce4 from "../img/young_dead_spruce.jpg";
import Spruce5 from "../img/dead_spruce.png"

import AppleTree from "../img/appletree.svg"
import CherryTree from "../img/cherrytree.svg"
import HangingTree from "../img/hangingtree.svg"
import PurpleTree from "../img/purpletree.svg"
import YellowTree from "../img/yellowtree.svg"
import TallTree from "../img/talltree.svg"
import UpcomingAppleTree from "../img/upcoming-appletree.svg"
import UpcomingCherryTree from "../img/upcoming-cherrytree.svg"
import UpcomingPurpleTree from "../img/upcoming-purpletree.svg"

export const allTrees = [{
    name: "Apple tree",
    desc: "Description about the apple tree",
    timeToGrow: 10,
    sapling: Spruce1,
    young_tree: AppleTree,
    old_tree: AppleTree,
    young_sick_tree: Spruce4,
    old_sick_tree: Spruce5
}, {
    name: "Oak",
    desc: "This is an oak",
    timeToGrow: 20,
    sapling: Oak1,
    young_tree: CherryTree,
    old_tree: CherryTree,
    young_sick_tree: Oak3,
    old_sick_tree: Oak3
}, {
    name: "Purple tree",
    desc: "This is a pine",
    timeToGrow: 30,
    sapling: Oak1,
    young_tree: PurpleTree,
    old_tree: PurpleTree,
    young_sick_tree: Oak3,
    old_sick_tree: Oak3
}
]

// Ni blandar javascript och react på ett sätt som man inte brukar göra
// get tree borde bara vara en vanligt funktion som tar emot parametrar som vanligt : getTree(treeType, currentAge, is_sick)

//Aha, detta är inte en vanlig funktion?

//const getTree = (tree, currentAge, isSick) => {} samma som den nedan.

//är det en komponent? 
// #1 Alla komponenter ska ha stor bokstav typ Component
// #2 det måste returnera html kod typ return <div/>
// både 1 && 2 måste stämma
export function getTree(tree, currentAge, isSick) {

    //treeType = 2
    const treeType = allTrees[tree];
    // return treeType;

    if (isSick == true) {
        if (currentAge / allTrees[tree].timeToGrow <= 0.33) {
            return allTrees[tree].young_sick_tree;
        } else if (currentAge / allTrees[tree].timeToGrow > 0.33) {
            return allTrees[tree].old_sick_tree;
        }
    } else if (isSick == false) {
        if (currentAge / allTrees[tree].timeToGrow <= 0.33) {
            return allTrees[tree].sapling;
        } else if (currentAge / allTrees[tree].timeToGrow < 0.66) {
            return allTrees[tree].young_tree;
        } else if (currentAge / allTrees[tree].timeToGrow >= 0.66) {
            return allTrees[tree].old_tree;
        }
    }
}

export function getTreeName(tree) {
    const treeType = allTrees[tree];
    return allTrees[tree].name;
}

export function getTreeAge(tree) {
    const treeType = allTrees[tree];
    return allTrees[tree].timeToGrow;
}

export function getTreeDescription(tree) {
    const treeType = allTrees[tree];
    return allTrees[tree].desc;
}

