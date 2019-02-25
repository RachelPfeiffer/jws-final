var help = document.querySelector('.help');
!function(e){"use strict";
var animateHTML = function() {
  var elems,
      windowHeight,
      listys,
      about

  var init = function() {
    elems = document.getElementsByClassName("hidden");
    listys = document.getElementsByClassName("tiny");
    about = document.getElementById("about");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }


  var _addEventHandlers = function() {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", init);
  }
  var _checkPosition = function() {
    for ( var i = 0; i < elems.length; i++ ) {
      var posFromTop = elems[i].getBoundingClientRect().top;
      if ( posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
      }
    }
    var secPosition = about.getBoundingClientRect().top;
    if (secPosition - windowHeight <= -10) {
      for ( var i = 0; i < listys.length; i++ ) {
      listys[i].classList.add("regsize");
      }
    }
    
     var helpPosition = help.getBoundingClientRect().top;
    if (helpPosition - windowHeight <= -100) {
      help.classList.add("in");
    }
  }

  return {
    init: init
  }
}

var close = document.querySelector('.close');
 close.addEventListener('click', function() {
               help.classList.remove('in');
             })


animateHTML().init();
}()
