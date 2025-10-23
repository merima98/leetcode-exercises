// Check if object instance of class
// Write a function that checks if a given value is an instance of a given class or superclass. 
// For this problem, an object is considered an instance 
// of a given class if that object has access to that class's methods.
// There are no constraints on the data types that can be passed to the function. 
// For example, the value or the class could be undefined.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkIfObjectInstanceOfClass(object: any, classFuntion: any): boolean {
    //Return false if classFunction is not a function
    if (typeof classFuntion !== "function") return false

    //Return false if object is null or undefined
    if (object === null) return false

    //Handle primitives

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const primitiveMap: Record<string, any> = {
        "number": Number,
        "string": String,
        "bigint": BigInt,
        "boolean": Boolean,
        "symbol": Symbol
    }

    const objectValue = typeof object

    if (objectValue in primitiveMap) {
        return classFuntion === primitiveMap[objectValue] || classFuntion === Object
    }

    try {
        return object instanceof classFuntion
    }
    catch {
        return false
    }
}