var Helpers = (function () {
	'use strict';

	var addClass = function (element, newClass) {
			if(element.classList && !element.classList.contains(newClass)) {
				element.classList.add(newClass);
			}
			return;
		},

		removeClass = function (element, removeClass) {
			if (element.classList) {
		        element.classList.remove(removeClass);
		    }
		},

		style = function (element, property) {
			var style = window.getComputedStyle(element);
			return style.getPropertyValue(property);
		};

	return {
		addClass: addClass,
		removeClass: removeClass,
		style: style
	};
}());

(function() {
	var hash = window.location.hash,
		nav = document.getElementsByTagName('nav')[0],
		navHeight  = parseInt(Helpers.style(nav, 'height'), 10);
	
	window.onscroll = function() {
		var scrolled  = window.scrollY; 

		// if(document.body.scrollTop >=  window.innerHeight - navHeight) {
		// 	Helpers.removeClass(nav, 'hidden');
		// } else {
		// 	Helpers.addClass(nav, 'hidden');
		// }

		// $('#title').css({
  //           'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
  //           'opacity': 1 - scrolled / 400 // fade out at 400px from top
  //       });

		// document.getElementById('nav').style.transform = 
		// 	'translate3d(0, ' + (scrolled * 0.50)+ 'px, 0)';

		//PASSAR A FAZER ISTO POR CLASSES 
		document.getElementById('nav').style.opacity = 
			scrolled / 400;

        document.getElementById('video').style.transform = 
        	'translate3d(0, ' + (scrolled * 0.50)+ 'px, 0)'; 
	};
})();