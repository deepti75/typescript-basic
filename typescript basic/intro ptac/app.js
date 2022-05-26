function combine(num1, num2, resultconversion) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var add = combine(10, 20, "as-number");
console.log(add, typeof add);
var add1 = combine("10", "20", "as-string");
