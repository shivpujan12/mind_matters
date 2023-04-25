function display(words)
{
  for(let i=0;i<4;i++)
  {
    document.querySelector(".p"+(i+1)).innerHTML=words[i];
  }
}
document.querySelector(".proceed").addEventListener("click",function(){
  window.open("../pages/task_one.html","_self");
})
document.querySelector(".Cancel").addEventListener("click",function(){
  window.open("../pages/instruction.html","_Self");
})