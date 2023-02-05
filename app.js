window.addEventListener("load", function(){
  this.setTimeout(
    function open(event){
      document.querySelector(".popup").style.display="block";
      
    },
    100
  )
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display="none"

  
})



function myFunction(){
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");

  document.querySelector("#button-imie").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none"
  
    
  })

  message.innerHTML = userInput.value
}






$(document).ready(function(){
  $('.button').click(function(){
    if($(this).hasClass('expand')){
      $('ul').slideUp(function(){
        $('.button').removeClass('expand');
        $('.fas').removeClass('expand')
      });
    }else{
      $(this).addClass('expand');
      setTimeout(function(){
        $('.fas').addClass('expand');
        $('ul').stop().slideDown();
      },200);
    }
  });
});




var fullTime = 400;
var warn     = 20;
var almost   = 10;

var currTime = fullTime;

var timer = setInterval( function() {
  --currTime;


  if ( !currTime ) window.clearInterval( timer );


  var txt = currTime.toString().length === 1 ? '0' + currTime : currTime;
  

  $('#sec').text( txt );


  var w = ( currTime / fullTime ) * 100;
  $('.timer-bar').css({'width': w + '%'})

  if( currTime === warn ) $('.timer-bar').addClass('timer-warn')
  if( currTime === almost ) $('.timer-bar').addClass('timer-almost')
}, 1000 );





/* Przyciski funkcyjne */
function change1(){
  document.getElementById('pic').src='./IMG/1.png' ;
  document.body.style.backgroundImage = "url('./IMG/kuchnia.jpeg')";



}

function change2(){
  document.getElementById('pic').src='./IMG/2.png';
  document.body.style.backgroundImage = "url('./IMG/tło.jpeg')";


  
}

function change3(){
  document.getElementById('pic').src='./IMG/3.png';
  document.body.style.backgroundImage = "url('./IMG/lazienka.jpeg')";
}

function change4(){
  document.getElementById('pic').src='./IMG/puste-tlo.png';
  document.body.style.backgroundImage = "url('./IMG/sypialnia.jpeg')";
}

function changeroom1(){
  document.body.style.backgroundImage = "url('./IMG/tło.jpeg')";
}

function changeroom2(){
  document.body.style.backgroundImage = "url('./IMG/kuchnia.jpeg')";
}

function changeroom3(){
  document.body.style.backgroundImage = "url('./IMG/lazienka.jpeg')";
}

function changeroom4(){
  document.body.style.backgroundImage = "url('./IMG/sypialnia.jpeg')";
  document.getElementById('pic').src='./IMG/puste-tlo.png';
}




function sound(){
     var snd = new Audio('./MUSIC/gameMusic.mp3')//wav is also supported
     snd.play()//plays the sound
}