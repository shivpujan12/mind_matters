const temp=document.location.href;
var param=temp.split('?');
console.log(param[1]);
var word=param[1].split("%20");
for(let i=0;i<4;i++)
{
    document.querySelector(".p"+(i+1)).innerHTML=word[i];
}
document.querySelector(".proceed").addEventListener("click",function(){
    window.open("../pages/task_one.html","_parent");
})
document.querySelector(".Cancel").addEventListener("click",function(){
    window.open("../pages/instruction.html","_parent");
})