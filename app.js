const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})


const menu = document.querySelector("#toggleMenu");
const menus = document.querySelectorAll(".menu");
const tabButton = document.querySelectorAll("#tab-btn")

gsap.registerPlugin(ScrollTrigger);


menu.addEventListener('click', function(e){
    const currentTabId = e.target.closest("li").dataset.menuId;
  
    if(!currentTabId) return
 
        document.querySelector(`.tab--${currentTabId}`).classList.remove("hidden");
        const button = e.target.closest("li");
        button.classList.add("btn-active");
        const currentTab = document.querySelector(`.tab--${currentTabId}`);

       tabButton.forEach(el => {
            if(el !== button) {
                el.classList.remove("btn-active");
            }
        });

  
    menus.forEach(tab => {
        if(tab !== currentTab){
            tab.classList.add("hidden")
        }
       
    })
})

gsap.to("#text-scroll-infinate",{
    duration: 20,
    ease: "none",
    repeat: -1,
    x: 2100,
})

const prgressbar = document.querySelector(".prgressBar");
prgressbar.style.width = "0";

let width = 0;
    // var interval = setInterval(function() {
    //     width++
    //     prgressbar.style.width = width + "%";

    //     if (width >= 100) {
    //     clearInterval(interval);
    //     }
    // }, 15);
    
    
const preloaderTexts = document.querySelectorAll("#preloaderText span");
const heroContainer = document.querySelectorAll("#hero-container");

// const myText = new SplitType('#my-text');
// let myTextChar = myText.chars

var tl = gsap.timeline({
    
});


tl.from(preloaderTexts, { yPercent: 80, ease: "power4.inOut"}, 0)
tl.to(preloaderTexts, { yPercent: -105, delay: 1, ease: "power4.inOut"}, 1)
tl.from("#preloaderLogo", { yPercent: 100, }, 0)
tl.to("#preloaderLogo", { yPercent: -105, delay: 1 }, 1)
tl.to("#preloaderBar", { height: 0, delay: 1}, 1)
tl.to(".preloader", {height: 0, duration: .8, ease: "power4.inOut",}, 2)

tl.from("#slide-up", { y: 160, duration: .9, ease: "power3.inOut",}, "-=.8");
// tl.from("#hero_img", { y: 160, duration:2,ease: "expo.inOut",}, "-=.9") ;
// tl.from("#loactionBar", {y: 100, duration: .7, ease: "power4.inOut"}, "-=.6");


tl.from("#navBar", {y: -90}, ">-75%");
// tl.to('#my-text', { scale: .8, duration: .8, ease: "power4.inOut" })
// tl.to('#my-text', { scale: 1, duration: 1, ease: "power4.out" }, "-=.3")

// tl.to(myTextChar, {
//     y: 0,
//     stagger: 0.05,
//     delay: 0.2,  
//     duration: .1
// }, ">-75%");
tl.from("#text-reveal", { yPercent: 95, }, ">-75%");
tl.from("#heroBtn", {
    yPercent: 100,
}, ">-75%");


const revealTextup = new SplitType('#reveal-text-up');
let revealTextupChar = revealTextup.words;
  
gsap.to(revealTextupChar, {
    y: 0,
    stagger: 0.05 ,
    duration: 0.2,
    scrollTrigger: {
        trigger: '#reveal-text-up',
        toggleActions: "restart none none none",
    },
});



// const revealText = function(){
//     const animation = new SplitType('#reveal-text-up');
//     console.log(animation.words)

//     gsap.to(animation.words, {
//         scrollTrigger: {
//             trigger: '#reveal-text-up',
//             start: "top center",
//             scrub: true, 
//             toggleAction: 'restart pause reverse pause'
//         },
//         y: 0,
//         stagger: 0.05,
//         delay: 0.01,
//         duration: .1
//     })
// }

// tl.add(revealText())







/********* WHY CHOOSE US *********/

const accordionHeaders = document.querySelectorAll('#accordion-header');

accordionHeaders.forEach(header => {

    header.classList.add("text-gray-500");

    header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    header.classList.add("text-blue");

    // Close all accordion items except the one being clicked
    document.querySelectorAll('#accordion-content').forEach(item => {
      if (item !== content) {
        item.style.height = "0";     
      }  
    });

    // Toggle the clicked accordion item
    content.style.height = content.style.height === '100%' ? '0' : '100%';  
  });
});


