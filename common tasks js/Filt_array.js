const mixedArray = [3,13,74,14,66,15,22,4];
// const isEven = num => { /* code */ };
const num = 4;

function even (a) {
    if (a%2 == 0) {
        console.log(a + ' четное');
    } else {console.log (a + ' нечетное');}
};

function filterArray (arr) {
    var evenarray = [];
    for (i=0; i <= arr.length; i++) {
        if (arr[i]%2 == 0) {
            evenarray.push(arr[i]);
        }; 
    };
    return console.log(evenarray + ' массив из четных чисел');
    };

even (num);
filterArray (mixedArray);
