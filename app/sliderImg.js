var img1 = document.getElementById("img1");
/*
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
*/
var header =  document.getElementById("header")

function slider(index){
    console.log("hola loco");
    switch (index) {
        case 1:
            header.style.backgroundImage = "url('img/header.jpg')";
            break;
        case 2:
            header.style.backgroundImage = "url('img/placa.png')";
            break;
        case 3:
            header.style.backgroundImage = "url('img/confianza1.jpg')";
            break;
        case 4:
            header.style.backgroundImage = "url('img/planificacion.jpg')";
            break;
        case 5:
            header.style.backgroundImage = "url('img/confianza2.jpg')";
            break;

        default:
            break;
    }
}


window.addEventListener("load",myFunction());
var myVar;
function myFunction() {
    console.log("setTimeout active")
    var i = 0;
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
  