// vowels using replace

function detail(name) {
    let result = name.replace(/[^aeiou]/gmi, "");

    return result;
}
console.log(name("RaghUl rAj"))

// vowels using condition

function value(str) {
    let count = 0;
    let b = "aeiou";

    for (i = 0; i <= str.length; i++) {
        if (b.indexOf(str[i]) > -1) {
            count++;
        }
    }
    return count;
}
console.log(value("how are you"));

// IF CAPS CAME
function word(str) {
    let data = 0;
    let vowels = "aeiou";

    for (i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) > -1) {
            data++;
        }
    }

    return data
}
console.log(word("WELCOME to IT FIELD"));




























