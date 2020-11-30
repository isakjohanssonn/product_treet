import React from "react"
import SickTree from "../img/sicktree.png"
import Sapling from "../img/appletree-sapling-anim.svg"
import AppleTree from "../img/appletree-full-anim.svg"
import AppleTreeYoung from "../img/appletree-young-anim.svg"
import CherryTree from "../img/cherrytree.svg"
import HangingTree from "../img/hangingtree-anim.svg"
import PurpleTree from "../img/purpletree.svg"
import YellowTree from "../img/yellowtree-anim.svg"
import TallTree from "../img/talltree.svg"
import UpcomingAppleTree from "../img/upcoming-appletree.svg"
import UpcomingCherryTree from "../img/upcoming-cherrytree.svg"
import UpcomingPurpleTree from "../img/upcoming-purpletree.svg"
import UpcomingHangingTree from "../img/upcoming-hangingtree.svg"
import UpcomingTallTree from "../img/upcoming-talltree.svg"
import UpcomingYellowTree from "../img/upcoming-yellowtree.svg"

export const allTrees = [{
    name: "Hanging tree",
    desc: "This is a hanging tree.",
    timeToGrow: 10,
    sapling: Sapling,
    young_tree: HangingTree,
    old_tree: HangingTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingHangingTree
}, {
    name: "Yellow tree",
    desc: "This is a yellow tree.",
    timeToGrow: 15,
    sapling: Sapling,
    young_tree: YellowTree,
    old_tree: YellowTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingYellowTree
}, {
    name: "Tall tree",
    desc: "This is a tall tree.",
    timeToGrow: 20,
    sapling: Sapling,
    young_tree: TallTree,
    old_tree: TallTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingTallTree
}, {
    name: "Apple tree",
    desc: "Description about the apple tree.",
    timeToGrow: 25,
    sapling: Sapling,
    young_tree: AppleTreeYoung,
    old_tree: AppleTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingAppleTree
}, {
    name: "Cherry tree",
    desc: "This is an cherry tree.",
    timeToGrow: 30,
    sapling: Sapling,
    young_tree: CherryTree,
    old_tree: CherryTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingCherryTree
}, {
    name: "Purple tree",
    desc: "This is a purple tree.",
    timeToGrow: 35,
    sapling: Sapling,
    young_tree: PurpleTree,
    old_tree: PurpleTree,
    young_sick_tree: SickTree,
    old_sick_tree: SickTree,
    upcoming_tree: UpcomingPurpleTree
}
]

export function getTree(tree, currentAge, isSick, isUpcoming, isFullyGrown) {

    if (isUpcoming) {
        return allTrees[tree].upcoming_tree;
    }

    if (isFullyGrown)
    {
        return allTrees[tree].old_tree;
    }

    if (isSick) {
        if (currentAge / allTrees[tree].timeToGrow <= 0.33) {
            return allTrees[tree].young_sick_tree;
        } else if (currentAge / allTrees[tree].timeToGrow > 0.33) {
            return allTrees[tree].old_sick_tree;
        }
    } else {
        if (currentAge / allTrees[tree].timeToGrow <= 0.33) {
            return allTrees[tree].sapling;
        } else if (currentAge / allTrees[tree].timeToGrow < 0.66) {
            return allTrees[tree].young_tree;
        } else if (currentAge / allTrees[tree].timeToGrow >= 0.66) {
            return allTrees[tree].old_tree;
        }
    }
}

export function TreeName(props) {
    const tree = props.tree;
    const treeName = allTrees[tree].name;
    return (<div>{treeName}</div>);
}

export function getTreeName(tree) {
    return allTrees[tree].name;
}

export function getTreeAge(tree) {
    return allTrees[tree].timeToGrow;
}

export function getTreeDescription(tree) {
    return allTrees[tree].desc;
}

export function getNumberTypesOfTrees() {
    return allTrees.length;
}

