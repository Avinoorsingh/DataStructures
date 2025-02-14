'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let negative=0;
    let positive=0;
    let zero=0;
    let len1=0;
    len1=arr.length;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            negative++;
        }
        else if(arr[i]==0){
            zero++;
        }
        else{
            positive++;
        }
    }
    console.log((positive/len1).toFixed(len1));
    console.log((negative/len1).toFixed(len1));
    console.log((zero/len1).toFixed(len1));
    // Write your code here

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
