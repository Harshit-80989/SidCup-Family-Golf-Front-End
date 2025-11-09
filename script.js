document.addEventListener('mousemove', function(dets) {
    document.querySelector("#cursor").style.left = dets.x + "px";
    document.querySelector("#cursor").style.top = dets.y + "px";
})
document.addEventListener('mousemove', function(dets) {
    document.querySelector("#cursor-blur").style.left = dets.x - 150 + "px";
    document.querySelector("#cursor-blur").style.top = dets.y - 150 + "px";
});

gsap.to("#navbar", {
    backgroundColor: "black",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
}
)
gsap.to("#main", {
    backgroundColor: "#121212",
    duration:0.4,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start:"top -20%",
        end:"top -100%", 
        scrub:1
    }   
}
)
