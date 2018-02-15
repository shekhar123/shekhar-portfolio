
const skillName =[["JavaScript", 4],["JSON/Ajax", 4],["HTML/HTML5", 4],["JQuery", 4],
                ["CSS", 4],["Unix", 3],["Java & C", 3],
                ["Bootstrap", 4],["Wordpress CMS", 3] ];
const language =[["Englis",4],["Finnish: YKI Certified",3],["Hindi",4],["Nepali",5]];


const skills =
["<strong>Model Drivent Architecture approach using UML.</strong>",
"<strong> Agile application development methodology using  Scrum </strong>",
"<strong>Version Control:</strong> Git & Github.",
"<strong>Development platforms:</strong> Atom, Eclipse, NetBeans, Visual Studio, DreamWeaver." ,
"<strong>Management Tool:</strong> Trello, Basecamp.",
"<strong>Front-End:</strong> HTML/HTML5, JavaScript ECMA 5, ECMA 6, CSS 3, Jquery Library, Bootstrap framework, Responsive Design, Ajax, JSON, RESTful API Learning REACT Framework. ",
"<strong>Back-End:</strong> Learning: NodeJs, Using ExpressJs framework, MongoDB, MYSQL database, SQL language.",
"<strong>Programming language:</strong> Basic C , C++, Java.",
"<strong>Certifications:</strong>Bachelore in Information Technology, Computer Architecture & Assembling, Finnish YKI Test.",
 "<strong>Others:</strong>Sustainale ICT Project, Networking: CCNA1, CCNA2, CCNA3, IT security, Photoshop, Unix, OOP, Functional Programming, DRY approach."];

const projectResources = [
  {
    "ProjectName":"Katsojuna",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4638/39564955041_9b1a528e58_b.jpgπ",
    "ProjectLink": "http://katsojunat.fi"
  },
  {
    "ProjectName":"Viral Images",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4653/26412674418_7ecc5e2d22_b.jpg",
    "ProjectLink": "https://viralimages.herokuapp.com/"
  },
  {
    "ProjectName":"Report App",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4593/25261894418_2dcb299ddc_b.jpg",
    "ProjectLink": "https://report-app-nodejs.herokuapp.com/"
  },
  {
    "ProjectName":"Weather app",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4405/36179527492_f98d07fd62_b.jpg",
    "ProjectLink": "https://shekhar123.github.io/weatherApp/"
  },
  {
    "ProjectName":"Calculator",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4305/36139284762_094774087b_b.jpg",
    "ProjectLink": "https://shekhar123.github.io/Basic-Calculator/"
  },
  {
    "ProjectName":"Namaskar Restaurant",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4310/35862309422_221c4dc117_b.jpg",
    "ProjectLink": "http://namaskaarasema.fi/index.html"
  },
  {
    "ProjectName":"Twitch-tv",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4304/35991681516_272ffd4177_b.jpg",
    "ProjectLink": "https://shekhar123.github.io/Twitchtv-JSON-API/"
  },
  {
    "ProjectName":"Wikipidea search",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4306/35862014952_95124d5b37_b.jpg",
    "ProjectLink": "https://shekhar123.github.io/Wikipedia-Viewer/"
  },
  {
    "ProjectName":"Randome Quotes",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4292/35991681786_0cafcda7eb_b.jpg",
    "ProjectLink": "https://shekhar123.github.io/RandomQuotes/"
  },
  {
    "ProjectName":"Himalayan Kitchen",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4311/35193810204_440d48dd20_b.jpg",
    "ProjectLink": "http://himalayankitchen.fi/"
  },
 {
    "ProjectName":"Tribute Page",
    "description":"",
    "ImageLInk": "https://farm5.staticflickr.com/4298/35643738870_55b5ee0669_b.jpg",
    "ProjectLink": "https://codepen.io/ShekharAryal/full/dXdLVg/"
  }
]

function renderProject (Obj){
  let pName ="", pLink ="", pImage ="";
  let temp ="";

  for ( var i in Obj ){
    pName = Obj[i].ProjectName ;
    pLink = Obj[i].ProjectLink ;
    pImage =Obj[i].ImageLInk;
   temp += '<div class="col-xs-12 col-sm-6 col-md-3 portfolio-item"><a href="'+pLink +'" target="_blank"> <img src ="'+pImage+'" class="img-responsive"><div class="overlay"></div><div class="text">'+pName+'</div></a></div>';
    }
    return temp;
}


function renderHTML(array0, array1,temStr){
  let fa= "";
  let htmlE='<p> <strong>'+array0+'</strong><span style="float:right;">';
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

function getSkills (array){
  let temp= "";
  for ( var i = 0; i < array.length ; i++){
    temp +=  array[i]+ "<br><br>";
  }
  return temp;
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
  var temp = renderProject (projectResources);
  $('#test').html(temp);

  var tempString = getSkills(skills);
  $('#skills').html(tempString);
  for (var i = 0; i < skillName.length; i++){
      renderHTML(skillName[i][0],skillName[i][1],"skill");
  }
  for (var i = 0; i < language.length; i++){
      renderHTML(language[i][0],language[i][1],"language");
  }

});
