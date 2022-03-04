$(document).ready(function(){
     $(window).scroll(function(){
         if (this.scrollY>20) {
            $ ('.navbar').addClass("sticky");
         }else{
            $ ('.navbar').removeClass("sticky");
         }
     })

var typed=new Typed(".typing", {
   strings:["Web Developer!","Designer!"],
   typeSpeed:100,
   backspeed:60,
   loop:true});
var typed=new Typed(".new", {
      strings:["a student of IIIT Bhagalpur ","CSE Branch"],
      typeSpeed:100,
      backspeed:60,
      loop:true});
});

