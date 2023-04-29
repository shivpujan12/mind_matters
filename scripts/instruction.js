document.querySelector(".submit").addEventListener("click",function(){
    let teamname=document.querySelector(".teamName").value;
    teamname=teamname.replaceAll(" ","_");
    let t1=document.querySelector(".t1").value;
    t1=t1.replaceAll(" ","_");
    let t2=document.querySelector(".t2").value;
    t2=t2.replaceAll(" ","_");
    let tnum=document.querySelector(".tnum").value;
    tnum=tnum.replaceAll(" ","_");
    console.log(teamname,t1,t2,tnum);
    window.open("../pages/confirmation.html?"+teamname+" "+t1+" "+t2+" "+tnum,"_parent");
})