//tabuada

const array=[0,1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length; j++) {
    let multiplicação = parseInt(array[i]) * parseInt(array[j]);
    console.log(array[i],'X',array[j],'=',multiplicação);
    
   } 
    
}