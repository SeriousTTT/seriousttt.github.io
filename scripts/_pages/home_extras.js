
/* start /scripts/_pages/home.js*/

var a=Math.floor(Math.random()*10)+1;if(a==8){var preloader=(new Image()).src="/images/prelaunch/fred.png"
$('body').append('<audio id="fred_audio" preload="auto"><source src="/includes/audio/SFX_FACE_SCREAM_01.mp3" type="audio/mp3"></audio>');setTimeout(function(){$('body').append("<div id='fred' style='width: 100%; height:100%; position: absolute; top: 0; background: url(/images/prelaunch/fred.png) no-repeat top center transparent; background-size: 100%;'></div>");document.getElementById('fred_audio').play();setTimeout(function(){$('#fred').fadeOut(50,function(){$('#fred').remove()})},300)},5000);};

/* end /scripts/_pages/home.js*/

/* start /scripts/_pages/home_extras.js*/

$('#foundsomething').on('mouseenter',function(){document.getElementById('foundsomething_audio').play();$('#foundsomething').off();})
$('.emailCap_open_btn').on('click',function(){$('.emailCap_open_btn').removeClass('visible-xs').hide();$('#emailCap').show().animate({opacity:1},1000);$('.emailCap_close_btn').on('click',function(){$('#emailCap').hide().css('opacity',0);$('#emailCap_open_btn_mobile').addClass('visible-xs');})})
h1z1_email={$errorDiv:$("#emailErrors"),submitEmail:function(inputObjName,callingObj){var email=$('#'+inputObjName).val();if(this.validateEmail(email)){this.sendAjax($('#'+inputObjName).val(),callingObj);}else{this.$errorDiv.html("<span class='errorlineone'>Did Someone Already Take a Bite Out of Your Brain?</span> That is not a valid email.").show();}},sendAjax:function(emailAddress,callingObj){var cid=1065708;$("#emailErrors").empty();$("#h1z1EmailSignup").empty();var target=document.getElementById('h1z1EmailSignup');var spinOpts={lines:10,length:6,width:4,radius:8,corners:1,rotate:0,color:'#fff',speed:1,trail:60,shadow:true,hwaccel:false,className:'spinner',zIndex:2e9,top:'54%',left:'48%'};$.extend(true,spinOpts);fsSpinner=new Spinner(spinOpts).spin(target);var _this=this;$.ajax({url:"/guestinfo-ws/save-email",type:"POST",data:{campaignId:cid,email:emailAddress},dataType:"json",timeout:10000}).done(function(data,textStatus,jqXHR){if(data.result){if(data.result=="SUCCESS"){$("#h1z1EmailSignup").html("Thank You for Submitting Your Email Address! We Will Keep You Updated as We Prepare to Release H1Z1.").addClass('success');$('.emailCap_open_btn').remove();}else{$("#h1z1EmailSignup").html("General problem"+data.errors).addClass('fail');}}else{$('#h1z1EmailSignup').html("Server error").addClass('fail');}}).fail(function(jqXHR,textStatus,errorThrown){if(textStatus=="timeout"){var message="Timeout";}else{var message="Request error";}
$("#h1z1EmailSignup").html(message).addClass('fail');})},validateEmail:function(email){var re=/^[\w\-\+]([\w\-\+\.]*[\w\-\+])?@([\w\-]+\.)+[a-z]{2,6}$/;return re.test(email);}}

/* end /scripts/_pages/home_extras.js*/