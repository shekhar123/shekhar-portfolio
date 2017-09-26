
var skillName =[["JavaScript", 4],["JSON/Ajax", 4],["HTML/HTML5", 4],["JQuery", 4],
                ["CSS", 4],["Unix", 3],["Java & C", 3],
                ["Bootstrap", 4],["Wordpress CMS", 3] ];
var language =[["Englis",4],["Finnish: YKI Certified",3],["Hindi",4],["Nepali",5]];
function renderHTML(array0, array1,temStr){
  var fa= "";
  var htmlE='<p> <strong>'+array0+'</strong><span style="float:right;">';
  for (var x = 0; x < array1 ; x++){
    fa +='<i class="fa fa-star fa-lg"></i>';
  }
  for (var y = 0; y < 5-array1; y++){
    fa +='<i class="fa fa-star-o fa-lg"></i>';
  }
  if(temStr==="skill"){
      $('#skill').append(htmlE+fa);
  }
  else{
      $('#language').append(htmlE+fa);
  }
}
function smoothScroll(){
  // Add smooth scrolling to all links in navbar + footer link
 $(".navbar a").on('click', function(event) {
   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;

     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){

       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   } // End if
 });
}

$(document).ready(function(){
  smoothScroll();
  console.log("Item :");
  for (var i = 0; i < skillName.length; i++){
      console.log("Course:"+skillName[i][0] + "Grade:"+skillName[i][1]);
      renderHTML(skillName[i][0],skillName[i][1],"skill");
  }
  for (var i = 0; i < language.length; i++){
      renderHTML(language[i][0],language[i][1],"language");
  }
});
