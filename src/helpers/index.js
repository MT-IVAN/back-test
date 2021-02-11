// let totalArr = 5;
// // let arr = [3,1,7,2,4];
// let arr = [3,1,4,2];
// let totalProcess= 3
// let totalSteps = 0;

// let getMajorAndSubtract = () =>{
//     let major = Math.max(...arr);
//     let index = arr.indexOf(major);
//     arr[index] = Math.floor(major/2);
//     return major;
// }

// while(totalProcess>0){
//     let currentMajor = getMajorAndSubtract();
//     totalProcess = totalProcess - currentMajor;
//     totalSteps++;
// }

// console.log(totalSteps);

// //-----------------------------------------------------------------------

// let arr = [2,4,3];
// let ans = [0];
// let lastIndex = arr.length()-1;
// for(let i=1;i<arr.length; i++){
//     let count = 0;
//     for(let j =i; j<arr.length; j++){
//         getPreviusElementAndCalculateTotalSum(arr)
//     }

// }

// function getPreviusElementAndCalculateTotalSum(arr,index,count){
//     let sign = arr[index-1] > arr[index] ? -1 : 1; 
//     count = count +(sign * Math.abs( arr[index-1] - arr[index]));
//     return count;
// }