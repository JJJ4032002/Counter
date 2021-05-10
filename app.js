const inc = document.querySelector("#Inc");
const dec = document.querySelector("#Dec");
const res = document.querySelector("#Res");
const count = document.querySelector("#count");
let ct = 0;
inc.addEventListener("click",()=>{
    ct++;
    console.log(ct);
    count.innerHTML = ct;
    
});

dec.addEventListener("click",()=>{
    ct--;
    console.log(ct);
    count.innerHTML = ct;
});

res.addEventListener("click",()=>{
    ct = 0;
    console.log(ct);
    count.innerHTML = ct;
})