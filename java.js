

var user = document.getElementById('user');
var box = document.querySelector('.box');


user.addEventListener('click' , function(){
      box.style.display = "block";

});

var close = document.getElementById('close');

close.addEventListener('click' , function(){
       box.style.display = "none";
});


var bar = document.getElementById('bar');
var menu = document.getElementById('menu');
var logo = document.querySelector('.logo');

bar.addEventListener('click', function(){

    menu.classList.toggle('active');

    if(menu.classList.contains('active')){
        logo.style.display = "none";
    }
    else{
        logo.style.display = "block";
    }

});


 function validate(){

      
var result = true;
var name = document.getElementById('name').value;
var pass = document.getElementById('pass').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var btn1 = document.getElementById('btn');
var msg1 = document.getElementById('msg1');
var msg2 = document.getElementById('msg2');
var msg3 = document.getElementById('msg3');
var msg4 = document.getElementById('msg4');

      if(name == ""){
            msg1.innerHTML = "Please enter your name!";
            result = false;
      }
      else if(name.length <= 3){
            msg1.innerHTML = "Name must be at least 3 characters!"
            result = false;
      }
      else{
            msg1.innerHTML = "";
      }

      if(pass == ""){
            msg2.innerHTML = "Please enter your password!";
            result = false;
      }
      else if(pass.length < 6){
       msg2.innerHTML = "Password must be at least 6 characters!";
       result = false;
      }
        else{
            msg2.innerHTML = "";
      }

      if(phone == ""){
            msg3.innerHTML = "Please enter your phone number!";
            result = false;
      }
       else if(phone.charAt(0) != 0){
            msg3.innerHTML = "Phone must start by zero";
            result = false;
      }
      else if(phone.length < 10){
            msg3.innerHTML = "Phone number must be at least 10 characters!";
            result = false;
      }
     
       else{
            msg3.innerHTML = "";
      }
       if(email == ""){
            msg4.innerHTML = "Please enter your Email!";
            result = false;
       }
        else{
            msg4.innerHTML = "";
      }

      return result;
 }


var moon = document.getElementById('moon');

moon.addEventListener("click" , function(){


    document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            moon.classList.remove("fa-moon");
            moon.classList.add("fa-sun");
        }
        else{
            moon.classList.remove("fa-sun");
            moon.classList.add("fa-moon");
        }
      
});

var cards = document.querySelectorAll('.card');
var parag = document.querySelectorAll('#parag');
var num = document.querySelectorAll('#num');

cards.forEach(function(card){

      card.addEventListener('click' ,function(){
         alert('Add to card Tasy And Healty $15.99');
       
});

});


var heart = document.querySelectorAll('#heart');


heart.forEach(function(heart){
heart.addEventListener('click' , function(){
         
      if(heart.style.color == "red"){
            heart.style.color = "white";
      }
      else{
            heart.style.color = "red";
      }
});

});


var imageadmin = document.getElementById('imageadmin');

imageadmin.addEventListener('mouseenter' , function(){

          imageadmin.style.opacity = "0";

    setTimeout(function(){
        imageadmin.src = "image/imag-19.png";
        imageadmin.style.opacity = "1";
    }, 500);
});

imageadmin.addEventListener('mouseleave' , function(){
       imageadmin.style.opacity = "0";

    setTimeout(function(){
        imageadmin.src = "image/imag-18.png";
        imageadmin.style.opacity = "1";
    }, 500);
});



var adminb = document.getElementById('adminb');

adminb.addEventListener('mouseenter' , function(){

          adminb.style.opacity = "0";

    setTimeout(function(){
        adminb.src = "image/imag-18.png";
        adminb.style.opacity = "1";
    }, 500);
});

adminb.addEventListener('mouseleave' , function(){
       adminb.style.opacity = "0";

    setTimeout(function(){
        adminb.src = "image/imag-20.png";
        adminb.style.opacity = "1";
    }, 500);
});


var imagepng = document.getElementById('imagepng');

imagepng.addEventListener('mouseenter' , function(){
        
      imagepng.style.opacity = "0";

      setTimeout(function(){
       imagepng.src = "image/imag-20.png"
           imagepng.style.opacity = "1";
    }, 500);
});

imagepng.addEventListener('mouseleave' , function(){

      imagepng.style.opacity = "0";
      setTimeout(function(){
             imagepng.src = "image/imag-23.png";
             imagepng.style.opacity = "1";
    }, 500);
});


var blogbtn = document.querySelectorAll('.blogbtn');
var blognone = document.querySelectorAll('.blognone');


blogbtn.forEach(function(btn , index){

btn.addEventListener('click', function(){
        
    blognone[index].classList.toggle('active');
});

});




