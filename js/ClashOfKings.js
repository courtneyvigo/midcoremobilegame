//start game
var currentMenu = 0;

function goToNextStep() {
	currentMenu += 1;
	console.log("currentMenu: " + currentMenu);
	var dimmer = document.getElementById("dimmer");
	var tutorial = document.getElementById("tutorial");
	var tutText = document.getElementById("tut-text");
	var mapSawmill = document.getElementById("map-sawmill");
	var mapStables = document.getElementById("map-stables");
	var mapFarm = document.getElementById("map-farm");
	var selectionMenu = document.getElementById("selection-menu");
	var buildHud = document.getElementById("build-hud");
	var buildBttn = document.getElementById("build-bttn");
	var map = document.getElementById("map-bg");
	var description = document.getElementById("description");
	var desText = document.getElementById("des-text-top");
	var desAvai = document.getElementById("des-text-avai");
	var sword = document.getElementById("sword");
	var frame = document.getElementById("frame");
	var topHud = document.getElementById("t-hud");
	var bottomHud = document.getElementById("b-hud");
	var backBttn = document.getElementById("back-button");
	var success = document.getElementById("success-conf");
	var successText = document.getElementById("success-txt");
	var icons = document.getElementById("icons");
	var icon3 = document.getElementById("icon-3");
	var arrow = document.getElementById("arrow");
	var menuFade = document.getElementById("menu-fade");
	var circle = document.getElementById("outer-circle");
	var scroll = document.getElementById("stables-scroll");
	var swordCover = document.getElementById("sword-cover");
	var outro = document.getElementById("outro-container");
	var game = document.getElementById("game-container");
	var fire = document.getElementById("fire-sprite");
	
	if (currentMenu == 1) {
		//move map
		map.className += " mng-map-anim1";
		//show menu 1 after tutorials: frame and sword are shown.
		tutorial.className += " mng-hidden-object";
		//set dimmer to dim 1 after a short delay
		setTimeout(function(){ 
			dimmer.className = dimmer.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			dimmer.className += " mng-dim1";
	 	}, 700);
		//sets the class name to nothing. ex: was "hidden-object", now its nothing and is visible
		selectionMenu.className = selectionMenu.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		buildHud.className += " mng-hidden-object";
		buildBttn.className += " mng-hidden-object";
	}

	if (currentMenu == 2) {
		//show menu 2: back button, dimmer2, buildBttn, and mapSawmill is shown.
		//hide HUD
		topHud.className += " mng-hidden-object";
		bottomHud.className += " mng-hidden-object";
		//move map
		map.className = map.className.replace( /(?:^|\s)mng-map-anim1(?!\S)/g , '' );
		map.className += " mng-map-anim2";
		//sawmill appear
		mapSawmill.className = mapSawmill.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		sword.className += " mng-hidden-object";
		fire.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		buildHud.className = buildHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//show back button
		backBttn.className = backBttn.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		description.className = description.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim1(?!\S)/g , '' );
		//menu fade animation on a delay
		setTimeout(function(){
			dimmer.className += " mng-dim2";
			dimmer.className += " mng-dimfade";
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire1(?!\S)/g , '' );
			fire.className += " mng-fire2";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			buildBttn.className = "mng-build-bttn";	
		}, 900);
	}

	if (currentMenu == 3) {
		//show next move: success menu and both HUDs are shown. Sawmill appears.
		selectionMenu.className += " mng-hidden-object";
		mapSawmill.className += " mng-hidden-object";
		topHud.className = topHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		bottomHud.className = bottomHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//map animates
		map.className = map.className.replace( /(?:^|\s)mng-map-anim2(?!\S)/g , '' );
		map.className += " mng-map-anim3";
		//show success menu and completed sawmill
		setTimeout(function(){
			mapSawmill.className = mapSawmill.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			success.className = success.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		}, 900);
		//success menu goes away after some time:
		setTimeout(function(){
			success.className += " mng-hidden-object";
		}, 2300);
		//tutorial comes back after some time with new prompt:
		setTimeout(function(){
			tutorial.className = tutorial.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			tutText.innerHTML ="Let's use the wood to build some Stables.";
		}, 2800);
	}

	if (currentMenu == 4) {
		//tutorial goes away:
		fire.className += " mng-hidden-object";
		tutorial.className += " mng-hidden-object";
		backBttn.className += " mng-hidden-object";
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim2(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dimfade(?!\S)/g , '' );
		//map animates to the stables position. Dimmer updates to dim3:
		sword.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		map.className = map.className.replace( /(?:^|\s)mng-map-anim3(?!\S)/g , '' );
		map.className += " mng-map-anim4";
		//selection menu becomes visible
		selectionMenu.className = selectionMenu.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//buildHud and buildBTTN becomes hidden
		buildHud.className += " mng-hidden-object";
		buildBttn.className += " mng-hidden-object";
		//dim 3 appears after a short delay
		setTimeout(function(){ 
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire2(?!\S)/g , '' );
			fire.className += " mng-fire3";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			dimmer.className += " mng-dim3";
	 	}, 700);
	}

	if (currentMenu == 5) {
		fire.className += " mng-hidden-object";
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim3(?!\S)/g , '' );
		//show menu 2: back button, dimmer2, buildBttn, and mapSawmill is shown.
		//hide HUD
		mapStables.className = mapStables.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		topHud.className += " mng-hidden-object";
		bottomHud.className += " mng-hidden-object";
		//change build icons to icons2:
		icons.className = map.className.replace( /(?:^|\s)mng-icons1(?!\S)/g , '' );
		icons.className += " mng-icons2";
		//move map
		map.className = map.className.replace( /(?:^|\s)mng-map-anim4(?!\S)/g , '' );
		map.className += " mng-map-anim5";
		//sawmill appear
		mapStables.className = mapStables.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		sword.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		buildHud.className = buildHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//show back button
		backBttn.className = backBttn.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//description change for stables:
		description.className = description.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		desText.innerHTML ="The Stables are where calvary troops are trained";
		//hide available text
		desAvai.className += " mng-hidden-object";

		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim1(?!\S)/g , '' );
		//menu fade animation on a delay
		setTimeout(function(){
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire3(?!\S)/g , '' );
			fire.className += " mng-fire2";
			dimmer.className += " mng-dim2";
			dimmer.className += " mng-dimfade";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			buildBttn.className = "mng-build-bttn";	
		}, 900);
	}

	if (currentMenu == 6) {
		//Repeat menu3: show next move: success menu and both HUDs are shown. Stables appear.
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim2(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dimfade(?!\S)/g , '' );
		selectionMenu.className += " mng-hidden-object";
		mapStables.className += " mng-hidden-object";
		topHud.className = topHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		bottomHud.className = bottomHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//map animates
		map.className = map.className.replace( /(?:^|\s)mng-map-anim5(?!\S)/g , '' );
		map.className += " mng-map-anim6";
		//show success menu and completed sawmill
		setTimeout(function(){
			mapStables.className = mapStables.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			success.className = success.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			//text change for success menu
			successText.innerHTML ="Stables Lv1 have been built";
		}, 900);
		//success menu goes away after some time:
		setTimeout(function(){
			success.className += " mng-hidden-object";
		}, 2300);
		//tutorial comes back after some time with new prompt:
		setTimeout(function(){
			tutorial.className = tutorial.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			tutText.innerHTML ="My Lord, we need a farm. You can collect Food to raise a powerful army.";
		}, 2800);
	}

	if (currentMenu == 7) {
		// hide tutorial and move map
		fire.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		sword.className += " mng-hidden-object";
		tutorial.className += " mng-hidden-object";
		map.className = map.className.replace( /(?:^|\s)mng-map-anim6(?!\S)/g , '' );
		map.className += " mng-map-anim7";
		//selection menu becomes visible
		selectionMenu.className = selectionMenu.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		buildHud.className += " mng-hidden-object";
		buildBttn.className += " mng-hidden-object";
		backBttn.className += " mng-hidden-object";
		setTimeout(function(){ 
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire2(?!\S)/g , '' );
			fire.className += " mng-fire4";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			dimmer.className += " mng-dim1";
	 	}, 700);
	}

	if (currentMenu == 8) {
		fire.className += " mng-hidden-object";
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim3(?!\S)/g , '' );
		//show menu 2: back button, dimmer2, buildBttn, and mapFarm is shown.
		//hide HUD
		mapStables.className = mapStables.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		topHud.className += " mng-hidden-object";
		bottomHud.className += " mng-hidden-object";
		//change build icons to icons2:
		icons.className = map.className.replace( /(?:^|\s)mng-icons2(?!\S)/g , '' );
		icons.className += " mng-icons3";
		//hide icon 3
		icon3.className += " mng-hidden-object";
		//move map
		map.className = map.className.replace( /(?:^|\s)mng-map-anim7(?!\S)/g , '' );
		map.className += " mng-map-anim8";
		//sawmill appear
		mapStables.className = mapStables.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		sword.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		buildHud.className = buildHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//show back button
		backBttn.className = backBttn.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//description change for stables:
		description.className = description.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		desText.innerHTML ="The farm is the place to produce and store Food.";
		//show available text
		desAvai.className = desAvai.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim1(?!\S)/g , '' );
		// show farm
		mapFarm.className = mapFarm.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//menu fade animation on a delay
		setTimeout(function(){
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire4(?!\S)/g , '' );
			fire.className += " mng-fire2";
			dimmer.className += " mng-dim2";
			dimmer.className += " mng-dimfade";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			buildBttn.className = "mng-build-bttn";	
		}, 400);
	}

	if (currentMenu == 9) {
		mapFarm.className += " mng-hidden-object";
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim2(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dimfade(?!\S)/g , '' );
		selectionMenu.className += " mng-hidden-object";
		//show both HUDs
		topHud.className = topHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		bottomHud.className = bottomHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		//animate map
		map.className = map.className.replace( /(?:^|\s)mng-map-anim8(?!\S)/g , '' );
		map.className += " mng-map-anim9";
		//show success menu and completed sawmill
		setTimeout(function(){
			mapFarm.className = mapFarm.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			success.className = success.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			//text change for success menu
			successText.innerHTML ="Farm Lv1 have been built";
		}, 900);
		//success menu goes away after some time:
		setTimeout(function(){
			success.className += " mng-hidden-object";
		}, 2300);
		//tutorial comes back after some time with new prompt:
		setTimeout(function(){
			tutorial.className = tutorial.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			tutText.innerHTML ="Now we have enough food to build our own army.";
		}, 2800);
	}

	if (currentMenu == 10) {
		// hide tutorial
		fire.className += " mng-hidden-object";
		tutorial.className += " mng-hidden-object";
		//animate map to the stables and change fade menu to dim 3. Sword will animate horizontally
		map.className = map.className.replace( /(?:^|\s)mng-map-anim9(?!\S)/g , '' );
		map.className += " mng-map-anim10";
		setTimeout(function(){
		 	buildHud.className += " mng-hidden-object";
		 	backBttn.className += " mng-hidden-object";
		 	buildBttn.className = " mng-hidden-object";
			selectionMenu.className = selectionMenu.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			fire.className = fire.className.replace( /(?:^|\s)mng-fire2(?!\S)/g , '' );
			fire.className += " mng-fire3";
			frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			dimmer.className += " mng-dim5";
			swordCover.className = swordCover.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
	 	}, 700);
	}

	if (currentMenu == 11) {
		//build menu appears and rotates 90deg. Sword changes to dim 4
		fire.className += " mng-hidden-object";
		sword.className += " mng-hidden-object";
		frame.className += " mng-hidden-object";
		scroll.className = buildHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		buildHud.className = buildHud.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		dimmer.className = dimmer.className.replace( /(?:^|\s)mng-dim5(?!\S)/g , '' );
		description.className += " mng-hidden-object";
		//the first menu fades in at 90deg
		circle.className += " mng-hidden-object"
		icons.className = icons.className.replace( /(?:^|\s)mng-map-anim7(?!\S)/g , '' );
		icons.className += " mng-icons4"
		icon3.className = icon3.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		buildHud.className += " mng-last-rotate";
		buildHud.className += " mng-dimfade";
		arrow.className += " mng-hidden-object";
		menuFade.className += " mng-hidden-object";
		//after some time, the second menu comes up
		setTimeout(function(){
		 	fire.className = fire.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		 	fire.className = fire.className.replace( /(?:^|\s)mng-fire3(?!\S)/g , '' );
			fire.className += " mng-fire5";
		 	scroll.className = scroll.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		 	frame.className = frame.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
			sword.className = sword.className.replace( /(?:^|\s)mng-hidden-object(?!\S)/g , '' );
		 	dimmer.className +=" mng-dimfade"
		 	dimmer.className += " mng-dim4";
	 	}, 700);
	}

	if (currentMenu == 12) {
		displayInstallScreen();
	}
}