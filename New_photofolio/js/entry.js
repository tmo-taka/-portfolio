import mainJS from './main';
import Vue from 'Vue';
import mainVue from './test_vue';

mainJS();
mainVue();

function navClick(link){
	console.log(link);
	/*var targetElements = document.getElementsByClassName('gnavList');
	for( var i = 0; i < targetElements.length; i++ ) {
		targetElements[i].childNodes[1].classList.remove('circleDeco-active');
		targetElements[i].childNodes[3].classList.remove('menu-ok');
	}

	link.nextSibling.classList.add("circleDeco-active");
	var menuDisplay = function() {
		link.parentNode.childNodes[3].classList.add("menu-ok");
	}
	setTimeout(menuDisplay,410,link);*/
}

global.navClick = navClick;



