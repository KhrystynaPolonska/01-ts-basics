// task-6.ts

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);         
const firstString = getFirstElement<string>(["a", "b", "c"]);  
const firstBoolean = getFirstElement<boolean>([true, false]);  

console.log(firstNumber); 
console.log(firstString);  
console.log(firstBoolean); 


// const mixed = getFirstElement([1, "two", true]);

const mixed = getFirstElement<number | string | boolean>([1, "two", true]);
console.log(mixed);
