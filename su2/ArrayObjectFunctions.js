const obj=[
    {
        name:"Monal",Age:22,Address:"Chandigarh"
    },
    {
        name:"Alex",Age:42,Address:"Panchkula"
    },
    {
        name:"Jatin",Age:35,Address:"Zirakpur"
    },
    {
        name:"Rakshit",Age:35,Address:"Chandigarh"
    }

]

// console.log(obj);
// console.log("Array berofe operations ^");
// //      Add objects at start
// let obj2={
//     name:"Rahul",Age:26,Address:"Mohali"
// }
// obj.unshift(obj2);
// console.log(obj);
// //   Remove elements from start
// obj.shift()
// console.log(obj);

// // Add elements from end
// obj.push(obj2);
// console.log(obj);

// // Remove elements from end  
// obj.pop();
// console.log(obj);

// //
// obj.splice(2,0,obj2);
// console.log(obj);

//

let arr3 =[]
arr3.push(obj)
// arr3.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(arr3)

Object.freeze(arr3)
console.log(arr3)
arr3.pop()
console.log(arr3)



