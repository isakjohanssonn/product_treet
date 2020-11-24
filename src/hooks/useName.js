const {useState} = require("react");

export function useName() {
    const [name, setName] = useState();

    return {name, setName};
}