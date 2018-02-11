//new WOW().init();

/*window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  //document.getElementById("myBar").style.width = scrolled + "%";
  console.log(Math.round(scrolled));
}  */

var elmt = document.getElementById("wrap");

function myFunction(e){


      
      //elmt.style.transition = "background 3s ease ";
      //elmt.style.background = "url('./imgs/ball1.png')";
  for (var i = 1; i < 16; i++) {
      (function (i) {
        setTimeout(function () {
          elmt.style.background = "url('./imgs/ball"+i+".png')";
        
      }, 50*i);
      })(i);
  };
}
