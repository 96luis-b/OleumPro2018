var img1 = document.getElementById("img1");
/*
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
*/
var header =  document.getElementById("header")
var btn1 =  document.getElementById("btn1")
var btn2 =  document.getElementById("btn2")
var btn3 =  document.getElementById("btn3")
var btn4 =  document.getElementById("btn4")
var btn5 =  document.getElementById("btn5")

function slider(index){
    console.log("hola loco");
    switch (index) {
        case 1:
            header.style.backgroundImage = "url('img/header.jpg')";
            btn1.style.background = "white";
            btn2.style.background = "rgba(255,255,255,.0)";
            btn3.style.background = "rgba(255,255,255,.0)";
            btn4.style.background = "rgba(255,255,255,.0)";
            btn5.style.background = "rgba(255,255,255,.0)";
            break;
        case 2:
            header.style.backgroundImage = "url('img/placa.png')";
            btn2.style.background = "white";
            btn1.style.background = "rgba(255,255,255,.0)";
            btn3.style.background = "rgba(255,255,255,.0)";
            btn4.style.background = "rgba(255,255,255,.0)";
            btn5.style.background = "rgba(255,255,255,.0)";
            break;
        case 3:
            header.style.backgroundImage = "url('img/confianza1.jpg')";
            btn3.style.background = "white";
            btn2.style.background = "rgba(255,255,255,.0)";
            btn1.style.background = "rgba(255,255,255,.0)";
            btn4.style.background = "rgba(255,255,255,.0)";
            btn5.style.background = "rgba(255,255,255,.0)";
            break;
        case 4:
            header.style.backgroundImage = "url('img/planificacion.jpg')";
            btn4.style.background = "white";
            btn2.style.background = "rgba(255,255,255,.0)";
            btn3.style.background = "rgba(255,255,255,.0)";
            btn1.style.background = "rgba(255,255,255,.0)";
            btn5.style.background = "rgba(255,255,255,.0)";
            break;
        case 5:
            header.style.backgroundImage = "url('img/confianza2.jpg')";
            btn5.style.background = "white";
            btn2.style.background = "rgba(255,255,255,.0)";
            btn3.style.background = "rgba(255,255,255,.0)";
            btn4.style.background = "rgba(255,255,255,.0)";
            btn1.style.background = "rgba(255,255,255,.0)";
            break;

        default:
            break;
    }
}


window.addEventListener("load",myFunction(1));
btn1.style.background = "white";
console.log("lol")

var myVar;
function myFunction(i) {
    console.log("setTimeout active")
    console.log(btn1);
    myVar = setInterval(()=>{;
        
      if(i>5){
          i=1;
      }else{
          i = i + 1;
      }
      slider(i);
  }, 3000);
}




  /*
  img1.addEventListener("click",sliderImg(1));
  img2.addEventListener("click",sliderImg(2));
  img3.addEventListener("click",sliderImg(3));
  img4.addEventListener("click",sliderImg(4));
  img5.addEventListener("click",sliderImg(5));
*/
  