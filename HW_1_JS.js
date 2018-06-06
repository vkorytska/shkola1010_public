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



