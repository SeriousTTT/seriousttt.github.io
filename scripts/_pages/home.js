/* start /scripts/_pages/home.js*/

var a=Math.floor(Math.random()*10)+1;if(a==8){var preloader=(new Image()).src="/images/prelaunch/fred.png"
$('body').append('<audio id="fred_audio" preload="auto"><source src="/includes/audio/SFX_FACE_SCREAM_01.mp3" type="audio/mp3"></audio>');setTimeout(function(){$('body').append("<div id='fred' style='width: 100%; height:100%; position: absolute; top: 0; background: url(/images/prelaunch/fred.png) no-repeat top center transparent; background-size: 100%;'></div>");document.getElementById('fred_audio').play();setTimeout(function(){$('#fred').fadeOut(50,function(){$('#fred').remove()})},300)},5000);};

/* end /scripts/_pages/home.js*/