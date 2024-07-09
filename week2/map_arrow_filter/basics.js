//map,filter,arrow functions..
//map and filter exists as a function on the array class 


const input = [1,2,3,4,5,6] ;
const ans = input.map((n)=>{
    return n*3
});

console.log(ans);

// (Q) Given an input array give back all the even values from it ?
// FILTERING
// Defining the filtering logic function
const value=input.filter((n)=>{
   if(n%2==0)
   return true;
 return false;
});

console.log(value);

//create a map function that takes 2 inputs an array and a trasnformation fn
// that transforms the array into the new array from scratch

function tf(n){
    return n*5
}

function SimulateMap(arr,tf){
    for(let i=0;i<arr.length;i++){
        arr[i]=tf(arr[i]);
    }
    return arr; 
}

let value2=SimulateMap(input,tf);
console.log(value2);