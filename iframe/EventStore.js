const store = {};

const emit = (eName, eFunc)=>{
    typeof eName !== "string" || typeof eFunc === "function"
    ? new Error("eName must be a stirng and eFunc must be a function")
    : eName in store ? store[eName].push(eFunc) 
    : store[eName] = [eFunc]
}

const on = (eName, payload)=>{
    
    typeof eName !== "string" || payload instanceof Object
    ? new Error("eName must be a stirng and eFunc must be a function")
    : eName in store 
    ? store[eName].forEach(item=> item(payload))
    : ""

}

const off = (eName) => {
    typeof eName !== "string"
    ? new Error("eName must be a stirng and eFunc must be a function")
    : eName in store 
        ? store[eName] = [] 
        : ""
}

export default {
    
}