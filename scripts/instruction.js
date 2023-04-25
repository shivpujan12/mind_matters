document.querySelector(".submit").addEventListener("click",function(){
    let teamname=document.querySelector(".teamName").value;
    let t1=document.querySelector(".t1").value;
    let t2=document.querySelector(".t2").value;
    let tnum=document.querySelector(".tnum").value;
    window.open("../pages/confirmation.html?"+teamname+" "+t1+" "+t2+" "+tnum,"_parent");
})