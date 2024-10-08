// function wrapper(){
//     let p = new Promise(function(resolve){
//         resolve("hi there");
//     });
//     return p;
// }

// async function main(){
//     const value = await wrapper();
//     console.log(value)
// }
// main();

// let p = new Promise(function(resolve){
    
// });
// console.log(p)

// function hey(){
//     let p = new Promise(function(resolve,reject){
//         setTimeout(resolve,2000);
//         console.log("inside");
//     })
//     return p;
// }

// async function print(){
//    const val = await hey();
//    console.log(val);
// }

// print();

// function set(fn,duration){
//     setTimeout(fn,duration);
// }

// set(function(){
//     console.log("function prints this")
// },2000)

function set(duration){
    const p = new Promise(function(resolve){
         setTimeout(resolve,duration);
    })
    return p;
}

// set(1000).then(function(){
//     console.log("printed inside function")
// })

async function print(){
    await set(2000);
    console.log("after");
}

print();