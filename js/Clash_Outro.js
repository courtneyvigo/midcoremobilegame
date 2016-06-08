//outro content
var displayIdleScreen = function() {
	var outro = document.getElementById("outro-container");

	outro.className = "mng-drop-done";
	document.getElementById("game-container").style.visibility = "hidden";
	outro.style.visibility = "visible";
	document.getElementById("top-button").className = 'mng-install-idle-dl';
	document.getElementById("bottom-button").className = 'mng-idle-retry';
	document.getElementById("dl-div").className = 'mng-idle-click-url';
	//This set of functions changes the main containers to be shown or hidden (whichever needs to be shown at the time)
}

var displayInstallScreen = function() {
	document.getElementById("outro-container").className = " "; 
	
	
	document.getElementById("outro-fade").className="mng-outro-fade";
	
	setTimeout(function(){ 
		document.getElementById("ending-thanks").className ="mng-ending-thanks";
	 }, 500);
	
	setTimeout(function(){
		document.getElementById("outro-container").style.visibility = "visible";
		document.getElementById("bottom-button").className = 'mng-install-thanks';
		document.getElementById("top-button").className = 'mng-install-idle-dl';
		document.getElementById("dl-div").className = 'mng-install-click-url';		
		
		setTimeout(function(){ 
			document.getElementById("outro-container").className += " mng-drop-anim"; 
			setTimeout(function(){ 
				document.getElementById("outro-container").className = "mng-drop-done";
			}, 1350);
		 }, 30);
	 }, 1500);
}

//This function resets the entire game and includes everything that needs to be reset, including updating the numbers
var restartGame = function() {
	currentMenu = 0;
	document.getElementById("game-container").style.visibility = "visible";
	document.getElementById("outro-container").className = " ";
	document.getElementById("map-bg").className = " ";
	document.getElementById("map-sawmill").className = "mng-hidden-object";
	document.getElementById("map-stables").className = "mng-hidden-object";
	document.getElementById("map-farm").className = "mng-hidden-object";
	document.getElementById("selection-menu").className = "mng-hidden-object";
	document.getElementById("build-hud").className = " ";
	document.getElementById("outer-circle").className = " ";
	document.getElementById("icons").className = "mng-icons1";
	document.getElementById("arrow").className = "mng-arrow";
	document.getElementById("menu-fade").className = " ";
	document.getElementById("description").className = "mng-hidden-object";
	document.getElementById("des-text-top").innerHTML ="The Sawmill is where Wood is produced and stored.";
	document.getElementById("des-text-avai").className = " ";
	document.getElementById("des-text-avai").innerHTML ="Available: 0/4";
	document.getElementById("back-button").className = "mng-hidden-object";
	document.getElementById("dimmer").className = "mng-hidden-object";
	document.getElementById("sword").className = "mng-sword";
	document.getElementById("sword-cover").className = "mng-hidden-object";
	document.getElementById("success-conf").className = "mng-hidden-object";
	document.getElementById("success-txt").innerHTML ="Sawmill Lv1 have been built";
	document.getElementById("tutorial").className = " ";
	document.getElementById("tut-text").innerHTML ="Wood is crucial for the empire's growth! We need a Sawmill first.";
	document.getElementById("build-bttn").className = "mng-build-bttn";
	document.getElementById("fire").className = "mng-fire1";
	document.getElementById("frame").className = "mng-boxoutline";
	document.getElementById("stables-scroll").className = "mng-hidden-object";
}

// this sends the user to the beginning of the game if the retry is clicked and the dl is not clicked
var clickRetry = function() {
	if (typeof startTestDrive != 'undefined') {
		startTestDrive();
	}
	else {
		restartGame();
	}
}

// this sends the user to the itunes page where they can download the game. It also is compatable with our UI
var clickDownload = function() {
	if (typeof mnUserClickDownload != 'undefined') {
		mnUserClickDownload();
	}
	else {
		window.location.href = 'https://itunes.apple.com/us/app/clash-of-kings-cok/id945274928?mt=8';
	}
}