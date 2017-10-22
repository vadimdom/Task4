//-------------------------------------------
//Прототип метода прибавления
Number.prototype.add = function(value) {
    return this + value;
};

//-------------------------------------------
//Прототип метода вычитания
Number.prototype.subtract = function(value) {
    return this - value;
};


//-------------------------------------------
//Прототип метода умножения
Number.prototype.multiply = function(value) {
    return this * value;
};


//-------------------------------------------
//Прототип метода деления
Number.prototype.divide = function(value) {
    return this / value;
};


//-------------------------------------------
//Прототип метода возведения в степень
Number.prototype.pow = function(value) {
    return Math.pow(this, value);
};


var a = 15;
console.log("Число a равно = " + a);
console.log("a + 3 = " + a.add(3));
console.log("a - 28 = " + a.subtract(28));
console.log("a * 7 = " + a.multiply(7));
console.log("a / 5 = " + a.divide(5));
console.log("a ^ 4 = " + a.pow(4));
console.log(Math.round(a.add(3).subtract(2).multiply(2).divide(3).pow(3) * 1000) / 1000);
console.log(Math.round(a.add(5).subtract(7).multiply(9).divide(11).pow(13) * 1000) / 1000);
console.log(Math.round(a.add(-4).subtract(5).multiply(8.3).divide(7).pow(2) * 1000) / 1000);
console.log(Math.round(a.add(17).subtract(22).multiply(-1).divide(15).pow(7) * 1000) / 1000);
console.log(Math.round(a.add(13).subtract(11).multiply(7).divide(5).pow(3) * 1000) / 1000);