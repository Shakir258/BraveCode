var tl = gsap.timeline();


tl.from("#nav h2", {
    y: -50,
    opacity: 0,
    delay:.2,
    duration:.5,
    stagger: 0.1
})
tl.from("#text h1", {
    x: -500,
    opacity: 0,
    // delay:.2,
    duration:1,
    stagger: 0.1
})

tl.from("img", {
    rotate: 90,
    opacity: 0,
    // delay:.5,
    duration:.2,
    stagger: 0.5
})