// // console.log("Working...");

window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 3000);
});


window.onload = function () {
    window.scrollTo(0, 0);
};



tl = gsap.timeline();

tl.to("#loader span", {
    y: 100,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    stagger: 0.3
})

tl = gsap.timeline();

tl.from("#navbar", {
    y: -50,
    duration: 1,
    delay: 2,
    opacity: 0
})

tl.from("#navbar h1", {
    x: -50,
    opacity: 0,
    duration: .5
})

tl.from("#nav-el", {
    y: -100,
    opacity: 0
})

tl.from("#about", {
    y: 50,
    opacity: 0,
    duration: .5
})



if (window.innerWidth > 768) {
    function animate(x){
        boxName = x.toString();
    
        gsap.from(boxName, {
            x: -1000,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: boxName,
                scroller: "body",
                start: "top 60%",
                end: "top 40%",
                scrub: 2
            }
        })
    }
}


animate("#animals");
animate("#plants");
animate("#insects");
animate("#aquatic");
animate("#birds");






function opacityAdjust(a, value_1, value_2, value_3, value_4){
    a[0].style.opacity = value_1.toString();
    a[1].style.opacity = value_2.toString();
    a[2].style.opacity = value_3.toString();
    a[3].style.opacity = value_4.toString();
}


function EaseIn(value){
    gsap.from(value, {
        x: -300,
        opacity: 0
    })
}
function EaseOut(value){
    gsap.from(value, {
        x: 300,
        opacity: 0
    })
}

function CircleRotate(name, val){
    gsap.to(name, {
        rotation: val
    })
}


// Animals:

let B_1 = document.getElementsByClassName("box");
let circle = document.getElementById("circle");
let I_1 = document.getElementsByClassName("info_1-box");

B_1[0].addEventListener('click', function () {
    CircleRotate(circle, 0);
    opacityAdjust(I_1, 1, 0, 0, 0);
    EaseIn(I_1[0]);
})


B_1[1].addEventListener('click', function () {
    CircleRotate(circle, 90);
    opacityAdjust(I_1, 0, 1, 0, 0);
    EaseIn(I_1[1]);
})


B_1[2].addEventListener('click', function () {
    CircleRotate(circle, 180);
    opacityAdjust(I_1, 0, 0, 1, 0);
    EaseIn(I_1[2]);
})


B_1[3].addEventListener('click', function () {
    CircleRotate(circle, 270);
    opacityAdjust(I_1, 0, 0, 0, 1);
    EaseIn(I_1[3]);
})


// Plants: 

let circle_2 = document.getElementById("circle_2");
let I_5 = document.getElementsByClassName("info_2-box");


B_1[4].addEventListener('click', function () {
    CircleRotate(circle_2, -180);
    opacityAdjust(I_5, 0, 0, 0, 1);
    EaseOut(I_5[3]);
})


B_1[5].addEventListener('click', function () {
    CircleRotate(circle_2, -90);
    opacityAdjust(I_5, 0, 1, 0, 0);
    EaseOut(I_5[1]);
})


B_1[6].addEventListener('click', function () {
    CircleRotate(circle_2, 0);
    opacityAdjust(I_5, 1, 0, 0, 0);
    EaseOut(I_5[0]);
})


B_1[7].addEventListener('click', function () {
    CircleRotate(circle_2, -270);
    opacityAdjust(I_5, 0, 0, 1, 0);
    EaseOut(I_5[2]);
})



// Insects: 

let circle_3 = document.getElementById("circle_3");
let I_9 = document.getElementsByClassName("info_3-box");


B_1[8].addEventListener('click', function () {
    CircleRotate(circle_3, 0);
    opacityAdjust(I_9, 1, 0, 0, 0);
    EaseIn(I_9[0]);
})


B_1[9].addEventListener('click', function () {
    CircleRotate(circle_3, 90);
    opacityAdjust(I_9, 0, 1, 0, 0);
    EaseIn(I_9[1]);
})


B_1[10].addEventListener('click', function () {
    CircleRotate(circle_3, 180);
    opacityAdjust(I_9, 0, 0, 1, 0);
    EaseIn(I_9[2]);
})


B_1[11].addEventListener('click', function () {
    CircleRotate(circle_3, 270);
    opacityAdjust(I_9, 0, 0, 0, 1);
    EaseIn(I_9[3]);
})



  // Aquatic:


  let img_btn = document.getElementsByClassName("img_1");
  let discrip = document.getElementsByClassName("discription");
  let discrip_img = document.getElementsByClassName("discrip-img");
  let block = document.getElementsByClassName("header-body");

  function movement(i, a,b,c,d){
    img_btn[i].addEventListener('click', function(){
        opacityAdjust(block, a,b,c,d);
        EaseIn(discrip[i]);
        EaseOut(discrip_img[i]);
    })
  }

  movement(0, 1,0,0,0);
  movement(1, 0,1,0,0);
  movement(2, 0,0,1,0);
  movement(3, 0,0,0,1);



  // Birds:

  let bird_box = document.getElementsByClassName("bird-box");
  let filter_box = document.getElementsByClassName("filter");
  let text = document.getElementsByClassName("text");
  let text_info = document.getElementsByClassName("info");

  function management(a){
    for(i = 0; i < 4; i++){
      if(i == a){
        continue;
      }
      bird_box[i].style.width = "10%";
      filter_box[i].style.backdropFilter = "blur(2px)";
      text[i].style.display = "";

      text_info[i].style.opacity = "0";
    }
  }

  function transform(a){
    bird_box[a].addEventListener('click', function(){
      management(a);
      bird_box[a].style.width = "70%";
      filter_box[a].style.background = "transparent";
      filter_box[a].style.backdropFilter = "blur(0px)";
      text[a].style.display = "none";
      text_info[a].style.opacity = "1";

      gsap.from(text_info[a], {
        x: -1000,
        opacity: 0,
        duration: 1
      })

    })
  }

  transform(0);
  transform(1);
  transform(2);
  transform(3);

