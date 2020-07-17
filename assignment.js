// Feet to Mile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var finalResult = feetToMile(5280);
console.log(finalResult);

// Wood Calculator

function woodCalculator(chair, table, bed){
    var chairQubic = chair * 1;
    var tableQubic = table * 3;
    var bedQubic = bed * 5;
    var totalQubic = chairQubic + tableQubic + bedQubic;
    return totalQubic;
}
var qubicResult = woodCalculator(4, 1, 2);
console.log(qubicResult);

// Brick Calculator

// Tiny Calculator
function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < smallest.length){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(['hasan', 'murad', 'shaki', 'balto', 'jack']);
console.log(smallestName);