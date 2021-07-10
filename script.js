const link = document.querySelectorAll(".scrollto");
link.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"center"})
    })
})


