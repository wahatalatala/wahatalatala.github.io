(function(){
    "using strict"
    const b = document.querySelector("button");
    b.className = "show";
    const d = document.querySelector("div");
    b.addEventListener("mouseenter",function(){
        d.className = "show";
    });

    b.addEventListener("mouseleave",function(){
        d.className = "hide";
    });
    
}());