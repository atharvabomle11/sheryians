gsap.from("#lright",{
    duration:2,
    scale:1.5,
    

})


var tl = gsap.timeline()

tl.from("#nav",{
   opacity:0,
   delay:1,
   y:"-95%"
})

tl.from("#nav h2",{
    opacity:0,
    duration:1,
    x:"-50%"
})

tl.from("#nav h4",{
    opacity:0,
    duration:1,
    y:"-50%",
    stagger:0.3
})

gsap.from("#lleft",{
    opacity:0,
    delay:3,
    x:"-50%"
})

gsap.from("#lleft h3",{
    opacity:0,
    x:"-20%",
    delay:3,
    duration:1,
})

gsap.from("#lbleft",{
    opacity:0,
    delay:3,
   x:"-50%"
})

gsap.from("#emoji",{
    opacity:0,
    x:"-20%",
    delay:3,
    duration:1,
})

gsap.from("#text",{
    opacity:0,
    x:"-20%",
    delay:3,
    duration:1,
})
gsap.from("#lbright",{
    opacity:0,
    delay:3,
    x:"-50%"
})



 var img = gsap.timeline()
gsap.from("#rtop",{
    opacity:0,
    delay:3,
    x:"120%"
})
 gsap.from("#write h3",{
    opacity:0,
    x:-20,
    delay:3,
    duration:1,
 })
gsap.from("#image",{
    opacity:0,
    y:-50,
    delay:3,
    opacity:0,
    duration:1,
})

gsap.from("#rbottom",{
    opacity:0,
    delay:3,
    x:"120%"
})

gsap.from("#account i",{
    opacity:0,
    x:-20,
    delay:3,
    duration:1,
})


var init = `M 10 100 Q 180 100 360 100`
var final = `M 10 100 Q 180 100 360 100`

var str = document.querySelector("#lbright")

str.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 360 100`
   
    gsap.to("svg path",{
        attr:{ d: path},
        duration:0.3,
        ease:"power3.out"
    })
})

str.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:final},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})