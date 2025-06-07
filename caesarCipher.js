export default function caesarCipher(params) {
    if (typeof params !== "object" || params === null) {
        throw new Error("Expected object as argument");
    }
    let numParams = Object.keys(params).length;
    if (numParams < 2) {
        throw new Error(`Received an object with ${numParams} attributes. Expected object with message and shift attributes`);
    }
    const {message, shift} = params;
    if (typeof message !== "string" || typeof shift !== "number") {
        throw new Error("Invalid object. Expected object with string for message and int for shift attributes")
    }
    let encryptedMessage = ""
    for (let i = 0; i < message.length; i++) {
        encryptedMessage += String.fromCharCode(shiftLetter(message[i].charCodeAt(0), shift));
    }
    return encryptedMessage;
}

function shiftLetter(letterCode, shift) {
    let calculateNewCode = (charRangeStart, charRangeEnd) => {
        if (letterCode >= charRangeStart && letterCode <= charRangeEnd) {
            let newCode = (letterCode + shift);
            if (newCode > charRangeEnd) {
                newCode = newCode % charRangeEnd + charRangeStart - 1;
            }
            return newCode;
        }
    }
    if (letterCode >= "a".charCodeAt(0) && letterCode <= "z".charCodeAt(0)) {
        return calculateNewCode("a".charCodeAt(0), "z".charCodeAt(0));
    }
    else if (letterCode >= "A".charCodeAt(0) && letterCode <= "Z".charCodeAt(0)) {
        return calculateNewCode("A".charCodeAt(0), "Z".charCodeAt(0));
    }
    return letterCode;
}