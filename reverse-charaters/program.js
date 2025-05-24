function reverseString(string) {
    let reversed_string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i];
    }
    return reversed_string;

}

let input = "cake";
let output = reverseString(input);
console.log(input);
console.log(output);