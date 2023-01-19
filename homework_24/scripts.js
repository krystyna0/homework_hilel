let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr && numOrStr.trim() && isNaN(+numOrStr)) {
    case null: {
        alert("ви скасували");
        break;
    }
    case "": {
        alert("Empty String");
        break;
    }
    case true: {
        alert(" number is Ba_NaN");
        break;
    }
    default: {
        alert("OK!");
        break;
    }
}