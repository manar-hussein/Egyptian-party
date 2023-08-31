$("#duration h2").click(function(e){
    $(e.target).next('p').slideToggle(500);
    $(e.target).next('p').siblings('p').slideUp(500);
  
});

let sec = document.querySelector("#sec span");
let min = document.querySelector("#min span");
let hour = document.querySelector("#hour span");
let day = document.querySelector("#day span");


let navbarWidth =$("#navbar").innerWidth();
$("#demo").animate({left:-navbarWidth},10);

$(".sidebtn").click(function(){
    if($("#demo").css("left") == "0px")
    {
        $("#demo").animate({left:-navbarWidth},1000)
    }else
    {
        $("#demo").animate({left:"0px"},1000)
    }
});
$(".close").click(function(){
    $("#demo").animate({left:-navbarWidth},1000)
});



$('#details').countdown('2024/9/1', function(event) {
    $(day).html(event.strftime('%D d'))
    $(hour).html(event.strftime('%H'))
    $(min).html(event.strftime('%M'))
    $(sec).html(event.strftime('%S'))
  });

$(window).scroll(function(){
    let durationTop =$('#duration').offset().top;
    if($(window).scrollTop()> durationTop - 100){
       $('.sidebtn button i').css("color","black")
       document.querySelector('.sidebtn button').classList.add("text-black")
    }else{
        $('.sidebtn button i').css("color","white")
        document.querySelector('.sidebtn button').classList.remove("text-black")
    }
});
  

$(function() {
    $('#joinUs textarea').characterCountdown(
    {
    countdownTarget: '.countdown', // the class, ID or element that will display the countdown
    maxChars: 100 //  the maximum amount of characters
    });
    });

$("a[href^='#']").click(function(e){
    let sectionTarget = $(e.target).attr('href');
    let sectionTop =$(sectionTarget).offset().top;
    $("body","html").animate({scrollTop:sectionTop},1000);
});


