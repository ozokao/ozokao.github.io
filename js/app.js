var lang = {
	"html": "100%",
	"css": "70%",
	"jquery": "50%",
	"python": "75%",
	"django": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language).html(pourcent);
  },delay*multiply);
  
  multiply++;

});

// /// //// ///// /////// ///////////////////
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span class="red">Python</span> Developer')
    .pauseFor(3000)
    .deleteChars(9)
    .typeString('Backend Developer')
    .pauseFor(3000)
    .deleteAll()
    .typeString('<span class="yellow">Website under construction</span>')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Thank You For Visiting My Portfolio.')
    .pauseFor(3000)
    .start();