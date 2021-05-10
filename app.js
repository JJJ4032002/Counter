const inc = document.querySelector("#Inc");
const dec = document.querySelector("#Dec");
const res = document.querySelector("#Res");
const count = document.querySelector("#count");
const head = document.querySelector("#Head");
let ct = 0;
inc.addEventListener("click",()=>{
    ct++;
    if(ct < 0){
 document.body.style.background = "#e5576c";
    count.style["color"] = "#770416";
    head.style["color"] = "white";
    }
     else if(ct == 0){
         document.body.style.background = "white";
     count.style["color"] = "black";
     head.style["color"] = "black";

    }
    else{
         document.body.style.background = "#43b265";
     count.style["color"] = "#06511d";
     head.style["color"] = "white";
    }
      
    console.log(ct);
    count.innerHTML = ct;
    
});

dec.addEventListener("click",()=>{
    ct--;
    console.log(ct);
    if(ct < 0){
 document.body.style.background = "#e5576c";
    count.style["color"] = "#770416";
    head.style["color"] = "white";
    }
    else if(ct == 0){
         document.body.style.background = "white";
     count.style["color"] = "black";
     head.style["color"] = "black";
    }
    else{
         document.body.style.background = "#43b265";
     count.style["color"] = "#06511d";
     head.style["color"] = "white";
    }
    
    
    
    count.innerHTML = ct;
});

res.addEventListener("click",()=>{
    ct = 0;
    console.log(ct);
     document.body.style.background = "white";
     count.style["color"] = "black";
      head.style["color"] = "black";
      

    count.innerHTML = ct;
})