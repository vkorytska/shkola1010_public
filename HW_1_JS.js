//Task 1
var numbers = [1,2,3,4,5,6,7,8,9,10],
min = 2,
max = 7;

function filterArray(numbers, min, max) {
var newNumbers = [];
for (i=0; i < numbers.length; i++) {
    if (numbers[i] >= min && numbers[i] <= max) {
        newNumbers.push(numbers[i])
    }
}
return newNumbers
}

filterArray(numbers, min, max);


//Task 2
var emptyObject = null,
someObject = 1;

function checkStatus(object){
if(object == null){
    return true;
}
return false;
}

checkStatus(emptyObject);
checkStatus(someObject);

//Task 3
var person = {name: 'Vika', age:23};

function getKey(object){
var personArray = [];
for (var key in object) {
    personArray.push(key)
}
return personArray;
}

getKey(person);