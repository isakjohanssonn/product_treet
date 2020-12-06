import { getTreeAge, getNumberTypesOfTrees } from "./AllTrees";

export function CalcTree(treeAge, currentTree, setCurrentTree, setTreeAge)
{
    var nextTreeID;
    if(treeAge >= getTreeAge(currentTree))
    {
        nextTreeID = (currentTree + 1) % (getNumberTypesOfTrees() - 1);
        setTreeAge(getTreeAge(currentTree)-treeAge);
        setCurrentTree(nextTreeID);
    }
}

// export function CalcSickTree(changeSickState, isSickTree, setIsSickTree)
// {
//     if (changeSickState)
//     {
//         isSickTree = !isSickTree;
//     }

//     setIsSickTree(isSickTree);
// }