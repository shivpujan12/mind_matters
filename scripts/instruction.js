document.querySelector(".submit").addEventListener("click",function(){
    let teamname=document.querySelector(".teamName").value;
    let t1=document.querySelector(".t1").value;
    let t2=document.querySelector(".t2").value;
    let tnum=document.querySelector(".tnum").value;
    teamname+=" ";
    t1+=" ";
    t2+=" ";
    tnum+=" ";
    console.log(teamname,t1,t2,tnum);
    window.open("../pages/confirmation.html","_self");
    const pass_values=[teamname,t1,t2,tnum];
    valueSender(pass_values);
})
function valueSender(pass_values)
{
}