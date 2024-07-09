//This is a promisified function
//The async await is a syntax which is only different from the Promisified syntax at the 
//calling state
//Cannot await at the top level
function AsyncFunction(){
    return new Promise(function(resolve){
        console.log("inside my promisified function")
        setTimeout(function(){
         resolve("I just got resolved")
        },10000)
        console.log("Statements after setTimeOut")
    });
}

async function main(){
    console.log("1 statement in main")
    let value= await AsyncFunction();
    console.log(value);
    console.log("After the value log")
}

main();

console.log("Statements of the remaining programimg")

// 1 statement in main
// inside my promisified function
// Statements after setTimeOut
// Statements of the remaining programimg
// I just got resolved
// After the value log