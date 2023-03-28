const heading=document.querySelector('h2');
const Body=document.querySelector('body');
const changeColor=document.getElementById('change');
const colorArray=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
const randomColor=()=>{
let str='#'
for(i=0;i<6;i++){
     str+= colorArray[Math.floor(Math.random()*colorArray.length)];
}
return str;
}
changeColor.addEventListener('click',()=>{
Body.style.backgroundColor=randomColor();
heading.innerHTML=randomColor();
});
