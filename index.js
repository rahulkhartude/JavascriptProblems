//remove duplcates
let arr = [2,5,4,4,1,8,5,4,7,6];
let uniqueArr = new Set(arr);
// console.log("uniq--",uniqueArr);

let uniqueArr2 = [...new Set(arr)];
// console.log("uniq--",uniqueArr2);

let uniqueArr3 = []
for (let i = 0; i < arr.length; i++) {
    let flag = false;

    for (let j = 0; j < uniqueArr3.length; j++) {
        if (arr[i] === uniqueArr3[j]) {
            flag = true;
            break; 
        }
    }

    if (!flag) {
        uniqueArr3.push(arr[i]); // Add only if not found
    }
}

//console.log(uniqueArr3);

// example 2. Write a JavaScript function that takes an array of numbers
// and returns a new array with only the even numbers.
function getEvenNumbers(arr) {
    let evenNumbers = []
    for(let i= 0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenNumbers.push(arr[i])
        }
    }
    return evenNumbers;
}
// console.log(getEvenNumbers([3,4,5,14,2,7,8,9,13]))

// example 3. . How to check whether a string is palindrome or not ?
let str = "radar";
let reverseString = str.split('').reverse().join('');
if(str==reverseString){
    // console.log("string is palindrome");
}
else{
    // console.log("string is not palindrome");
}

//second type Palindrome
function isPalindrome2(str2){
    let i =0;
for( i=0;i<str2.length/2;i++){
   if(str2.charAt(i) != str2.charAt(str2.length-1-i))
    {
    //    console.log( "notPalindrome") ;
        break;
   }
}
if(i==Math.floor(str2.length/2+1)){
//  console.log("palindrome");
}
}
// isPalindrome2("madam");

//4.Find the factorial of given number ?

function factorial(n) {
    let staticNo = 1;
   
    for (let i = 2; i <= n; i++) {
        staticNo = staticNo * i;

    }
    // console.log(staticNo);
}
factorial(10)

// 5. Program to find longest word in a given sentence
let longrstString =findLongestWord("Hi Iam Saikrishnwewwa Iam a UI Devdsdsdsdsdeloper sd");
// console.log(longrstString);
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWordIndex = 0;
    let longestWordElement = 0;
    for(let i = 0;i<words.length;i++)
    {
       if(longestWordElement<words[i].length){
        longestWordIndex = i;
        longestWordElement = words[i].length;
       }
    }
    return words[longestWordIndex];
}

// 6. Write a JavaScript program to find the maximum number in
// an array.

let maxNumber = findLargeNum([2,5,1,60,203,33]);
// console.log("maxNumber",maxNumber);

function findLargeNum(arr){
    let maxNum = arr[0];
   for(let i = 1;i<arr.length;i++){
     if(arr[i]>maxNum){
     maxNum = arr[i];
  }

}
return maxNum;

}

// Write a JavaScript function to check if a given number is
// prime.
let isPrimeVar = isPrime(5);
// console.log("isPrime",isPrimeVar)
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    else{
        for(let i = 2;i<num;i++){
           if(num%i==0)
            return false;
        }
        return true;
    }
}

// . Program to find Reverse of a string without using
// built-in method ?
let revString = reverseStringFun("avishkar");
// console.log("revString",revString);
function reverseStringFun(str){
//   let reversedstring = "";
//   for(let i = str.length-1;i>=0;i--){
//     reversedstring += str[i];
//   }
// return reversedstring;
return str.split("").reverse().join("");
 }

//  9. Find the smallest word in a given sentence ?
let smallestWord = findSmallestWord("I am a programmer");
// console.log("smallestWord:",smallestWord);
function findSmallestWord(str){
   let  strArr= str.split(' ');
    let smallest = strArr[0];
    for(let i=1;i<strArr.length;i++){
      if(smallest.length>strArr[i].length){
        smallest = strArr[i];

      }
    }

    return smallest;

}
//last occurence
// function findSmallestWord(str){
//     let strArr = str.split(' ');
//     console.log(strArr.length, strArr);
//     let smallest = strArr[0];
//     for(let i = 1; i < strArr.length; i++){
//        if(smallest.length > strArr[i].length){  // Use >= to correctly update
//          smallest = strArr[i];
//          console.log("hi"); // This will log when smallest is updated
//        }
//     }
//     console.log("smallest", smallest);
//     return smallest;
//  }

//  let smallestWord = findSmallestWord("I am a programmer");
//  console.log("smallestWord:", smallestWord);


// 10. Write a function sumOfThirds(arr), which takes an
// array arr as an argument. This function should return a sum of
// every third number in the array, starting from the first one.
//  𝐃𝐢𝐫𝐞𝐜𝐭𝐢𝐨𝐧𝐬:
//  If the input array is empty or contains less than 3 numbers then return 0.
//  The input array will contain only numbers.

let sumofThree = sumOfThirds([4,2,6,4,5,6,2]);
// console.log("sumofThree",sumofThree)
function sumOfThirds  (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 3) {
       sum += arr[i];
    }
    return sum
}

// 11. Write a JavaScript function that returns the Fibonacci
// sequence up to a given number of terms.
let fabonaccieArr = findFabonacciSeries(10);
// console.log("fabonaccieArr",fabonaccieArr);
function findFabonacciSeries(number){
   let fabarr = [0,1]
   for(let index = 2 ;index<number;index++)
    {
       let sum = fabarr[fabarr.length-1]+fabarr[fabarr.length-2]
       fabarr.push(sum);
    }
    return fabarr;

}

// 12. Find the max count of consecutive 1ʼs in an array
let countCons = findConsecutive1s ([1, 1, 9, 1, 9, 19, 7, 1,1, 1, 1,1, 2, 5, 1,1,12,1,1])
//console.log("countCons",countCons);

// function findConsecutive1s (arr)
// {
//    let maxCount = 0
//    let count;
//    for(let i = 0 ;i<arr.length;i++){
//        if(arr[i] === 1){
//            let count =1;
//           for(let j = i+1;j<arr.length;j++){
//             if(arr[j] === 1){
//                 count++;
//           }
//           else break;
//        }
//        if(count>maxCount){
//         maxCount = count;
//        }
//    }
// }
// return maxCount;
// }

// Your code is using a nested loop (for inside another for), making it less efficient with O(n²) time complexity. You can solve this problem more efficiently using a single loop (O(n) time complexity).
function findConsecutive1s(arr) {
    let maxCount = 0;  // Store the maximum consecutive 1's
    let currentCount = 0; // Track current streak

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++; // Increase count if it's 1
            maxCount = Math.max(maxCount, currentCount); // Update max if needed
        } else {
            currentCount = 0; // Reset count if not 1
        }
    }
    return maxCount;
}


// 13. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].
// Merge them and sort [0,3,4,4,6,30,31] ?
let a = [0,3,4,31] ;
let b = [4,6,30] ;
let c = mergeSortedArrays(a,b);
// console.log("c",c);
function mergeSortedArrays (arr1,arr2){
    let result = [];
    result = [...a,...b];

return result.sort((x,y)=>x-y);

}

//basic method

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    // Add remaining elements (if any)
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }

    return mergedArray;
  }

  // Example usage
  const arr1 = [0, 3, 65, 91];
  const arr2 = [40, 90];
//   console.log(mergeSortedArrays(arr1, arr2)); // Output: [0, 3, 4, 4, 6, 30, 31]


//  Write logic to get unique objects from below array ?
//  I/P [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: 
// "111111"}];
//  O/P [{name: "sai"},{name:"Nang"}{name: "111111"}

let  arrObj= [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: 
"111111"}];

let uniqueObjects = [...new Set(arrObj.map(JSON.stringify))].map(JSON.parse);
// console.log("uniqueObjects",uniqueObjects);

// 17. Write a JavaScript program to find the largest element in a 
// nested array. 

 let array = [
 [3, 4, 58], 
[709, 8, 9, [10, 11]], [111, 2]
 ]

 array = array.flat(Infinity);
 
 let max= Number.NEGATIVE_INFINITY

 for(let i = 0;i<array.length;i++){
    if(array[i] >max){
        max=array[i];
    }
 }
//  console.log(array);
//   console.log("max",max);

//  18. Given a string, write a javascript function to count the 
// occurrences of each character in the string.


let occ = "helaalo";
let unq = occ.split("");
unq =  [...new Set(unq)];
let cnt = [];
countCharacters(occ);
function countCharacters(myString){
   
     cnt = [];
    for (let i = 0; i<unq.length;i++){
         let count = 0;
        for(let j=0;j<occ.length ;j++)
            {
                if(unq[i] == occ[j])
                    {
                    count++;
                }  
            }
       cnt.push({[unq[i]]:count});
    }

}
// console.log(cnt);

// 19. Write a javascript  function that sorts an array of numbers 
// in ascending order. 
const unsortedArray = [5, 2, 9, 1, 3, 6];

// const sortedArray = unsortedArray.sort((a, b) =>a-b);
// console.log(sortedArray);

  for(let i=0;i<unsortedArray.length;i++)
    {
       for(let j = i+1;j<unsortedArray.length;j++)
        {
            if(unsortedArray[i] > unsortedArray[j])
                {
                    let temp = unsortedArray[i];
                    unsortedArray[i] = unsortedArray[j];
                    unsortedArray[j] = temp;
                }
        }
    }

    // console.log(unsortedArray);

//  20. Write a javascript  function that sorts an array of numbers 
// in descending order.   
const arrNumber = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArray = arrNumber.sort((a, b) =>b-a);
// console.log(sortedArray);

for(let index = 0 ;index <arrNumber.length;index++)
    {
        for(let j = index+1;j<arrNumber.length;j++)
            {
                if(arrNumber[index] < arrNumber[j])
                    {
                       let temp = arrNumber[index];
                       arrNumber[index] = arrNumber[j];
                        arrNumber[j] = temp;
                    }
            }
    }
    // console.log(arrNumber);

  
    // 23. Write a function which converts string input into an object
 //stringToObject("a.b.c", "someValue");
 // output → {a: {b: {c: "someValue"}}}

//  Logic
//  split('.') – Turns the string "a.b.c" into ["a", "b", "c"].
// Loop through keys – For each key except the last, build empty nested objects.
// On the last key, assign the given value ("someValue").

   function stringToObject(path, value) {
  const keys = path.split('.');
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = value; // last key → assign the value
    } else {
      current[key] = {};     // intermediate key → assign an empty object
      current = current[key]; // move deeper
    }
  }

  return result;
}

// Example
const output = stringToObject("a.b.c", "someValue");
console.log(output); // { a: { b: { c: 'someValue' } } }
 